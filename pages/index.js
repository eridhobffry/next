import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='h-screen bg-gray-200 overflow-y-scroll overflow-hidden'>
      <Head>
        <title>instagram 2.0 youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      {/* HEADER */}
      <Header />
      {/* FEED */}
      <Feed />
      {/* MODAL */}
    </div>
  )
}
