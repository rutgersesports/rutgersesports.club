import React from 'react'
import styles from '../styles/home-page.module.css'
import NavigationBar from '../components/navigation-bar'
import Hero from '../components/hero'
import AboutOurselves from '../components/about-ourselves'
import MeetOurClubs from '../components/meet-our-clubs'
import Footer from '../components/footer'
import Head from 'next/head'
import ContactUs from '@/components/contact-us'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Rutgers Esports</title>
        <meta
          name="description"
          content="Home to competitive and casual gaming at Rutgers University - New Brunswick"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['HomePage']}>
        <NavigationBar />
        <Hero />
        <AboutOurselves />
        <MeetOurClubs />
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}
