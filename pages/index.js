import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import MainSection from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div container mx-auto>
      <Head>
        <title>FRONTIERX</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header>
        <Header />
      </header>

      <main className='w-[100vw]'>
        <MainSection />
      </main>

      <footer>
        <h1>I am footer</h1>
      </footer>
    </div>
  )
}
