import React from 'react'
import styles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={styles['hero']}>
      <video className={styles['hero-video']} playsInline autoPlay muted loop>
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className={styles['hero-text']}>
        <h1>
          Home to casual
          <br />
          and competitive
          <br />
          gaming at Rutgers
        </h1>
      </div>
    </div>
  )
}
