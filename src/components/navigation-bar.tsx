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

/*
 * This tracking pixel service is provided by Rutgers University, only Rutgers faculty or student workers at Rutgers Open System Solutions
 * are able to view the data. See https://oss.rutgers.edu/ if something goes wrong.
 *
 * NOTE: This tracking pixel is a beta feature maintained by Rutgers Open System Solutions, "shrunk.rutgers.edu" is a domain
 * name used to deploy services by the organization to test their product.
 */
function TrackingPixel() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={'https://shrunk.rutgers.edu/twvgd6ry'} width={1} height={1} style={{ display: 'none' }} alt={''} />
}

export default function NavigationBar() {
  const [isOpen, setOpen] = useState<boolean>(true)

  function handleMenuClick() {
    setOpen(!isOpen)
  }
  return (
    <>
      <TrackingPixel />
      <div className={styles.nav}>
        <Link href="/">
          <Image className={styles.logo} src={rutgersEsportsLogo} alt="Rutgers Esports" />
        </Link>
        <div className={styles.mobilemenuicon} onClick={handleMenuClick}>
          <Image src={menuIcon} alt="Open routes" />
        </div>
        <div className={isOpen ? styles.routes : styles.mobileroutes}>
          <ul>
            <li className={styles.mobileHome}>
              <Link href="/">Home</Link>
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
