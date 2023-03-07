import React from 'react'
import Link from 'next/link'
import rutgersEsportsLogo from '../images/rutgersesports-logo.png'
import styles from '../styles/navigation-bar.module.css'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <div className={styles['nav']}>
      <div className={styles['esports-logo']}>
        <Link href="/">
          <Image src={rutgersEsportsLogo} alt="Rutgers Esports Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <div className={styles['route']}>
            <Link href="/">Home</Link>
          </div>
        </li>
        <li>
          <div className={styles['route']}>
            <Link href="/apply">Apply</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
