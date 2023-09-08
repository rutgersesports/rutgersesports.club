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

function shuffle(array: Array<any>) {
  /* Taken straight from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
  let currentIndex = array.length,
    randomIndex

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export default function MeetOurClubs() {
  const shuffledClubs: Array<any> = shuffle(clubs)

  /*
   * This is dealing with NextJS bullshit.
   * Read here: https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
   */
  const [hydrated, setHydrated] = React.useState<boolean>(false)
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    return null
  }

  return (
    <div className={styles['meet-our-clubs']}>
      <h1>Meet Our Clubs</h1>
      <ScrollContainer className={styles['clubs']} hideScrollbars={false}>
        {shuffledClubs.map((data, key) => {
          return <Club key={key} name={data.name} backgroundImage={data.image} socialMedia={data.socialMedia} />
        })}
      </ScrollContainer>
    </div>
  )
}
