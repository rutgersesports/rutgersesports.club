import React, { useState } from 'react'
import Link from 'next/link'
import menuIcon from '../icons/menu.svg'
import rutgersEsportsLogo from '../images/rutgersesports-logo.png'
import styles from '../styles/navigation-bar.module.css'
import Image from 'next/image'

function NavigationBar() {
  const [isOpen, setOpen] = useState(true)

  function handleMenuClick() {
    setOpen(!isOpen)
  }

  return (
    <div className={styles['nav']}>
      <div className={styles['esports-logo']}>
        <Link href="/">
          <Image src={rutgersEsportsLogo} alt="Rutgers Esports Logo" />
        </Link>
      </div>
      <div className={styles['menu']}>
        <div className={styles['mobile-menu-icon']} onClick={handleMenuClick}>
          <Image src={menuIcon} alt="menu" />
        </div>
        <div style={{ display: isOpen ? 'block' : 'none' }}>
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
      </div>
    </div>
  )
}

export default NavigationBar
