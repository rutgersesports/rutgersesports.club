/*
This entire file has been taken from the Pygame: Community Edition's
website landing page and has been modified to fit Rutgers Esports's
needs. <https://github.com/pygame-community/pyga.me>

The code that was taken from the project was also written by the same
code owner.
*/

import React, { useState } from 'react'
import menuIcon from '../icons/menu.svg'
import rutgersEsportsLogo from '../images/rutgersesports-logo.png'
import styles from '../styles/navigation-bar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavigationBar() {
  const [isOpen, setOpen] = useState<boolean>(true)

  function handleMenuClick() {
    setOpen(!isOpen)
  }
  return (
    <>
      <img src={'https://shrunk.rutgers.edu/twvgd6ry'} width={1} height={1} style={{ display: 'none' }} alt={''} />
      <div className={styles.nav}>
        <Link href="/">
          <Image className={styles.logo} src={rutgersEsportsLogo} alt="logo" />
        </Link>
        <div className={styles.mobilemenuicon} onClick={handleMenuClick}>
          <Image src={menuIcon} alt="menu" />
        </div>
        <div className={isOpen ? styles.routes : styles.mobileroutes}>
          <ul>
            <li className={styles.mobileHome}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="events">Events</Link>
            </li>
            <li>
              <Link href="members">Members</Link>
            </li>
            <li>
              <Link href="apply">Recruitment</Link>
            </li>
            <li>
              <Link href="https://sca.rutgers.edu/student-centers/esports-center">Esports Center</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
