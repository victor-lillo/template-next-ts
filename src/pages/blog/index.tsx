import axios from 'axios'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next';

import Layout from '../../components/Layout';

import { Post } from '@types'

interface PostProps {
    posts: Post[];
}

export default function Blog({ posts }: PostProps) {

    return (
        <Layout>

            <Head>
                <title>Blog</title>
                <meta name="description" content="Blablabla contact"></meta>
            </Head>

            <section className='section'>

                <h1 className='title'>Blog</h1>

                {posts.map((post) => (
                    <div key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            <h4>{post.id} - {post.title}</h4>
                        </Link>
                        <li>{post.body}</li>
                    </div>
                ))}
            </section>

        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
    const fetchPosts = async (url: string): Promise<Post[]> => {
        const response = await axios.get(url)
        return response.data
    }

    const res = await fetchPosts(fetchURL)

    return {
        props: {
            // person,
            posts: res
        },
    };
};


