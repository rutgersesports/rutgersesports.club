import React from 'react'
import styles from '../styles/base.module.css'
import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'
import JobOpenings from '../components/job-openings'
import ImageHeader from '../components/image-header'
import recruitmentImage from '../images/job-openings.jpg'

export default function Apply() {
  return (
    <div className={styles['base']}>
      <NavigationBar />
      <ImageHeader title="Recruitment" backgroundImage={recruitmentImage} />
      <JobOpenings />
      <Footer />
    </div>
  )
}
