import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import styles from '../styles/meet-our-clubs.module.css'
import { clubs } from '../data/clubs-info'
import Image from 'next/image'

const images = require.context('../images', true)
const icons = require.context('../icons', true)

function buildClubWidget(name, getInvolved, backgroundImage, socialMedia, x, y) {
  const loadedImage = images(backgroundImage)
  return (
    <div
      className={styles["club"]}
      style={{
        backgroundImage: `url(${loadedImage})`,
        start: { x },
        top: { y },
      }}
    >
      <div className={styles["club-contents"]}>
        <h2>{name}</h2>
        <div id={styles["club-links"]}>
          <a target="_blank" rel="noopener noreferrer" href={socialMedia.discord}>
            <Image src={icons('./discord.svg')} alt="discord" id="social-media-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MeetOurClubs() {
  return (
    <div className={styles["meet-our-clubs"]}>
      <h1>Meet Our Clubs</h1>
      <ScrollContainer className={styles["clubs"]} hideScrollbars={false}>
        {clubs.map((data, key) => {
          return (
            <div key={key}>
              {buildClubWidget(data.name, data.getInvolved, data.image, data.socialMedia, data.x, data.y)}
            </div>
          )
        })}
      </ScrollContainer>
    </div>
  )
}
