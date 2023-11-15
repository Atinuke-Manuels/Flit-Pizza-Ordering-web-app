import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPage from '@/components/LandingPage'
import SubIndex from '@/components/SubIndex'
import PizzaList from '@/components/PizzaList'
import Strength from '@/components/Strength'
import FeedBack from '@/components/FeedBack'



export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzon App</title>
        <meta name="description" content="Hand Made Pizza at affordable prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div >
      <LandingPage/>
      <SubIndex/>
      <PizzaList/>
      <Strength/>
      <FeedBack/>
        </div>
      </main>
    </>
  )
}
