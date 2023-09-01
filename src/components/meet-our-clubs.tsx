import React from 'react'
import Link from 'next/link'
import ScrollContainer from 'react-indiana-drag-scroll'
import styles from '../styles/meet-our-clubs.module.css'
import { clubs } from '../data/clubs-info'
import { StaticImageData } from 'next/image'

interface IClub {
  name: string
  backgroundImage: StaticImageData
  socialMedia: any
}

function Club(props: IClub) {
  return (
    <Link style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={props.socialMedia.discord}>
      <div
        className={styles['club']}
        style={{
          backgroundImage: `url(${props.backgroundImage.src})`,
        }}
      >
        <div className={styles['club-contents']}>
          <h2>{props.name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default function MeetOurClubs() {
  return (
    <div className={styles['meet-our-clubs']}>
      <h1>Meet Our Clubs</h1>
      <ScrollContainer className={styles['clubs']} hideScrollbars={false}>
        {clubs.map((data, key) => {
          return <Club key={key} name={data.name} backgroundImage={data.image} socialMedia={data.socialMedia} />
        })}
      </ScrollContainer>
    </div>
  )
}
