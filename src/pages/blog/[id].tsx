import axios from 'axios'
import React from 'react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import Layout from '../../components/Layout';

import { Post } from '@types'

const fetchPosts = async (url: string): Promise<Post[]> => {
    const response = await axios.get(url)
    return response.data
}
const fetchPostById = async (url: string): Promise<Post> => {
    const response = await axios.get(url)
    return response.data
}

interface Params extends ParsedUrlQuery {
    id: string
}

interface Props {
    data: Post
}

//? If we don't want to type the page:
// export default function PageTest({ data: { id, userId, title, body } }: Props) { 

//? We can type the page. We can do it like that:
// Option 1
// const PageTest: NextPage<Props> = ({ data }: Props) => {
// Option 2: More idiomatic
const PageTest: NextPage<Props> = ({ data: { id, userId, title, body } }: Props) => {
    return (
        <Layout>
            <Head>
                <title>{`${id} - ${title}`}</title>
                <meta name="description" content={`Bablabla ${title}`}></meta>
            </Head>

            <h1>{id} - {title}</h1>
            <div>{body}</div>

        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await fetchPosts('https://jsonplaceholder.typicode.com/posts')

    // We return the id from the post, and we pass it as a path param
    const paths = data.map(({ id }) => ({
        params: { id: `${id}` }
    }))

    return {
        paths,
        fallback: false
    }
}

// We type the GSP and then we use it to type the id
export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
    const { id } = context.params as Params

    const data = await fetchPostById('https://jsonplaceholder.typicode.com/posts/' + id)

    return {
        props: {
            data,
        },
    }
}

export default PageTest

