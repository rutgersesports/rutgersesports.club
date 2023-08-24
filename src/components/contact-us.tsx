import React from 'react'
import styles from '../styles/contact-us.module.css'
import Link from 'next/link'

interface IContactCard {
  title: string
  description: string
  link: string
  linkTitle: string
}

function ContactCard(props: IContactCard) {
  return (
    <div className={styles['desc-col']}>
      <div className={styles['desc-col-content']}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <Link href={props.link}>
        <div className={styles['info-button']}>{props.linkTitle}</div>
      </Link>
    </div>
  )
}

export default function ContactUs() {
  return (
    <div className={styles['contact-us']}>
      <h1>Contact Us</h1>
      <div className={styles['contact-us-desc']}>
        <ContactCard
          title="Partners"
          description="If you or your organization would like to do a collaboration through sponsorship or partnership, we encourage you to reach out to us."
          link="mailto: partnerships.rutgersesports@gmail.com"
          linkTitle="Contact Partnerships"
        />

        <ContactCard
          title="Events"
          description="Send us an email if you have any questions relating to our events such as Scarlet Classic, Artist Alley, Scarlet Knightmare, etc."
          link="mailto: rutgersesports@gmail.com"
          linkTitle="Contact Events"
        />

        <ContactCard
          title="Applications"
          description="If you happen to have any inquiries related to your application, we are here and more than willing to provide you with the necessary guidance."
          link="mailto: ruesportshr@gmail.com"
          linkTitle="Contact Human Resources"
        />
      </div>
    </div>
  )
}
