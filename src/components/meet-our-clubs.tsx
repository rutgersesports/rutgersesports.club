import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'
import styles from '../styles/meet-our-clubs.module.css'
import { ClubSocialMedia, clubs, orderClubsByBanner } from '../data/clubs-info'
import discordIcon from '../icons/discord.svg'
import instagramIcon from '../icons/instagram.svg'
import twitterIcon from '../icons/twitter.svg'

interface IClub {
  name: string
  backgroundImage?: StaticImageData
  socialMedia: ClubSocialMedia
}

function Club(props: IClub) {
  const { discord, instagram, twitter } = props.socialMedia

  return (
    <div
      className={styles['club']}
      style={
        props.backgroundImage
          ? {
              backgroundImage: `url(${props.backgroundImage.src})`,
            }
          : undefined
      }
    >
      <div className={styles['club-contents']}>
        <h2>{props.name}</h2>
        <div className={styles['club-links']}>
          {discord && (
            <Link target="_blank" rel="noopener noreferrer" href={discord} aria-label={`${props.name} Discord`}>
              <Image src={discordIcon} className={styles['social-media-icon']} alt="" />
            </Link>
          )}
          {instagram && (
            <Link target="_blank" rel="noopener noreferrer" href={instagram} aria-label={`${props.name} Instagram`}>
              <Image src={instagramIcon} className={styles['social-media-icon']} alt="" />
            </Link>
          )}
          {twitter && (
            <Link target="_blank" rel="noopener noreferrer" href={twitter} aria-label={`${props.name} X`}>
              <Image src={twitterIcon} className={styles['social-media-icon']} alt="" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

function shuffle<T>(array: T[]) {
  /* Taken straight from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
  const copy = [...array]
  let currentIndex = copy.length,
    randomIndex

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[copy[currentIndex], copy[randomIndex]] = [copy[randomIndex], copy[currentIndex]]
  }

  return copy
}

export default function MeetOurClubs() {
  const [shuffledClubs, setShuffledClubs] = React.useState<typeof clubs>([])

  /*
   * This is dealing with NextJS bullshit.
   * Read here: https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
   */
  React.useEffect(() => {
    setShuffledClubs(orderClubsByBanner(shuffle(clubs)))
  }, [])

  if (shuffledClubs.length === 0) {
    return null
  }

  return (
    <div className={styles['meet-our-clubs']}>
      <h1>Meet Our Clubs</h1>
      <ScrollContainer className={styles['clubs']} hideScrollbars={false}>
        {shuffledClubs.map((data) => (
          <Club key={data.name} name={data.name} backgroundImage={data.image} socialMedia={data.socialMedia} />
        ))}
      </ScrollContainer>
    </div>
  )
}
