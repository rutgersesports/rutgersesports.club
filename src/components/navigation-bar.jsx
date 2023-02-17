import React from 'react'
import rutgersEsportsLogo from '../images/rutgersesports-logo.png'
import styles from '../styles/navigation-bar.module.css'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <div className={styles['nav']}>
      <div className={styles['esports-logo']}>
        <a href="">
          <Image src={rutgersEsportsLogo} alt="Rutgers Esports Logo" />
        </a>
      </div>
    </div>
  )
}
