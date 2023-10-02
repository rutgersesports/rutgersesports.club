import React from 'react'
import styles from '../styles/base.module.css'
import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'
import ImageHeader from '@/components/image-header'
import eventsImage from '../images/anthpo.jpg'

export default function Events() {
  return (
    <div className={styles['base']}>
      <NavigationBar />
      <ImageHeader title="Events" backgroundImage={eventsImage} />
      <Footer />
    </div>
  )
}
