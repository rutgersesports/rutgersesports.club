import React from 'react'
import styles from '../styles/about-ourselves.module.css'
import theclub from '../images/the-club.jpg'
import community1 from '../images/community1.jpg'
import community2 from '../images/community2.jpg'
import community3 from '../images/community3.png'
import community4 from '../images/community4.jpg'
import Image from 'next/image'

export default function AboutOurselves() {
  return (
    <div className={styles['about-ourselves']}>
      <h1>About Ourselves</h1>
      <div className={styles['community-image-grid']}>
        <Image
          className={`${styles['community-img']} ${styles['community-img--1']}`}
          src={theclub}
          alt="A group photo of Rutgers Esports 2022 members."
        />
        <Image className={styles['community-img']} src={community1} alt="A man in a tan shirt playing VALORANT." />
        <Image className={styles['community-img']} src={community2} alt="A woman preparing for Artist Alley." />
        <Image className={styles['community-img']} src={community3} alt="A group of four people playing chess." />
        <Image
          className={styles['community-img']}
          src={community4}
          alt="A group of women playing Mario Kart 8 Deluxe."
        />
      </div>
      <div className={styles['about-ourselves-desc']}>
        <div className={styles['desc-col']}>
          <h2>Community</h2>
          <p>
            We pride ourselves on being an open, friendly, and diverse community. Everyone is welcome here no matter who
            you are or where you come from.
          </p>
        </div>
        <div className={styles['desc-col']}>
          <h2>Casual</h2>
          <p>
            Whether you play to win or play for fun, we have a place for you with nearly a dozen clubs dedicated to the
            most popular video games.
          </p>
        </div>
        <div className={styles['desc-col']}>
          <h2>Competitive</h2>
          <p>
            Our teams and players are some of the best in the nation with top placings in many of the most well-known
            collegiate esports tournaments.
          </p>
        </div>
      </div>
    </div>
  )
}
