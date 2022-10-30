import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '@components/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Fentos | About</title>
        <meta name="description" content="Fentos' project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='section'>
        <h1>About</h1>
      </section>

    </Layout>
  )
}

export default About
