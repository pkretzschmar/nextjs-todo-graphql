import Head from 'next/head'
import React from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TODO App with GraphQL</title>
        <meta content="TO-DO App with GraphQL" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="bg-black flex items-center justify-center h-screen flex-col gap-5">
        <h1 className="text-4xl text-gray-200 font-semibold">
          Next.js + TypeScript + MongoDB + GraphQL
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-xl">
          This app is a simple demo on how to use Next.js with TypeScript. The
          database is hosted on Atlas and consumed using a GraphQL API.
        </p>
      </div>
    </div>
  )
}

export default Home
