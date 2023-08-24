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
            <h2>Partners</h2>
            <p>
              If you or your organization would like to do a collaboration through sponsorship or partnership, we
              encourage you to reach out to us.
            </p>
          </div>
          <Link href="mailto: partnerships.rutgersesports@gmail.com">
            <div className={styles['info-button']}>Contact Partnerships</div>
          </Link>
        </div>

        <div className={styles['desc-col']}>
          <div className={styles['desc-col-content']}>
            <h2>Events</h2>
            <p>
              Send us an email if you have any questions relating to our events such as Scarlet Classic, Artist Alley,
              Scarlet Knightmare, etc.
            </p>
          </div>

          <Link href="mailto: rutgersesports@gmail.com">
            <div className={styles['info-button']}>Contact Events</div>
          </Link>
        </div>

        <div className={styles['desc-col']}>
          <div className={styles['desc-col-content']}>
            <h2>Applications</h2>
            <p>
              If you happen to have any inquiries related to your application, we are here and more than willing to
              provide you with the necessary guidance.
            </p>
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
