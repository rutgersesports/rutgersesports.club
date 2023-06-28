import React from 'react'
import styles from '../styles/contact-us.module.css'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className={styles['contact-us']}>
      <h1>Contact Us</h1>
      <div className={styles['contact-us-desc']}>
        <div className={styles['desc-col']}>
          <div className={styles['desc-col-content']}>
            <h2>Sponsors</h2>
            <p>Interested in sponsoring or partnering with Rutgers Esports?</p>
          </div>
          <Link href="mailto: partnerships.rutgersesports@gmail.com">
            <div className={styles['info-button']}>Contact Sponsors</div>
          </Link>
        </div>
        <div className={styles['desc-col']}>
          <div className={styles['desc-col-content']}>
            <h2>Events</h2>
            <p>Apply to become an artist alley manager or help manage an event at Rutgers Esports.</p>
          </div>

          <Link href="mailto: rutgersesports@gmail.com">
            <div className={styles['info-button']}>Contact Events</div>
          </Link>
        </div>
        <div className={styles['desc-col']}>
          <div className={styles['desc-col-content']}>
            <h2>Applications</h2>
            <p>For questions regarding applications to Rutgers Esports.</p>
          </div>

          <Link href="mailto: ruesportshr@gmail.com">
            <div className={styles['info-button']}>Contact Human Resources</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

/*
For Partnership/Sponsorship related items: Partnerships.rutgersesports@gmail.com
For Event/Artist Alley Related items: 
Rutgersesports@gmail.com
For questions about applying to Rutgers Esports:
RUesportsHR@gmail.com
*/
