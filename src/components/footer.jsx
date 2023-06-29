import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.css'
import discordIcon from '../icons/discord.svg'
import facebookIcon from '../icons/facebook.svg'
import instagramIcon from '../icons/instagram.svg'
import twitchIcon from '../icons/twitch.svg'
import twitterIcon from '../icons/twitter.svg'
import linkedinIcon from '../icons/linkedin.svg'
import githubIcon from '../icons/github.svg'
import youtubeIcon from '../icons/youtube.svg'
import tiktokIcon from '../icons/tiktok.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className={styles['footer']}>
        <div className={styles['footer-row']}>
          <div className={styles['footer-col']}>
            <h3>Rutgers Esports</h3>
            Rutgers Esports is a student-run collegiate esports organization at Rutgers University - New Brunswick. We
            have no affiliation with the Esports Center located on Busch Campus; for all Esports Center inquiries,
            please visit <Link href="https://esports.rutgers.edu">esports.rutgers.edu</Link>.
          </div>
          <div className={styles['footer-col']}>
            <h3>Relative Links</h3>
            <ul>
              <li>
                <Link href="https://github.com/rutgersesports/rutgersverifybot">Email Verification Discord Bot</Link>
              </li>
              <li>
                <Link href="https://github.com/rutgersesports/rutgersesports.club">Website Source Code</Link>
              </li>
              <li>
                <Link href="/apply">Volunteer Positions</Link>
              </li>
            </ul>
            <div className="socials">
              <Link target="_blank" rel="noopener noreferrer" href="https://discord.gg/rutgersesports">
                <Image src={discordIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/RutgersEsports">
                <Image src={twitterIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://instagram.com/rutgersesports">
                <Image src={instagramIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://tiktok.com/@rutgersesports">
                <Image src={tiktokIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/rutgersesports">
                <Image src={youtubeIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://twitch.tv/rutgersesports">
                <Image src={twitchIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://facebook.com/rutgersesports">
                <Image src={facebookIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rutgers-esports">
                <Image src={linkedinIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/rutgersesports">
                <Image src={githubIcon} className={styles['social-icon']} alt="social-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-end']}>
        Original Website Built & Designed by{' '}
        <Link target="_blank" rel="noopener noreferrer" href="https://go.rutgers.edu/andrewhong">
          Andrew Hong
        </Link>
        <br />
      </div>
    </>
  )
}
