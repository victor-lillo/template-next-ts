import type { NextPage } from 'next'
import Head from 'next/head'

import ComponentTemplate from '@components/ComponentTemplate'
import Layout from '@components/Layout'
import Section from '@components/Section'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Fentos | NextJS & TypeScript</title>
        <meta name='description' content="Fentos' project" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section test={false}>
        <ComponentTemplate text='Click me!' />
      </Section>

      <Section width='full' test={true}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum
          minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!
        </div>
      </Section>

      <Image alt={`imagen de portada`} height={100} width={100} src='/logo.png' />
    </Layout>
  )
}

export default Home
