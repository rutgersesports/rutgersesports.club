import React from 'react'
import styles from '../styles/footer.module.css'
import discordIcon from '../icons/discord.svg'
import facebookIcon from '../icons/facebook.svg'
import instagramIcon from '../icons/instagram.svg'
import twitchIcon from '../icons/twitch.svg'
import twitterIcon from '../icons/twitter.svg'
import linkedinIcon from '../icons/linkedin.svg'
import githubIcon from '../icons/github.svg'
import youtubeIcon from '../icons/youtube.svg'
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
            please visit <a href="https://esports.rutgers.edu">esports.rutgers.edu</a>.
          </div>
          <div className={styles['footer-col']}>
            <h3>Relative Links</h3>
            <ul>
              <li>
                <a href="https://github.com/rutgersesports/rutgersverifybot">Email Verification Discord Bot</a>
              </li>
              <li>
                <a href="https://github.com/rutgersesports/rutgersesports.club">Website Source Code</a>
              </li>
              <li>
                <a href="/apply">Volunteer Positions</a>
              </li>
            </ul>
            <div className="socials">
              <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/rutgersesports">
                <Image src={discordIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/RutgersEsports">
                <Image src={twitterIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/rutgersesports">
                <Image src={instagramIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/rutgersesports">
                <Image src={youtubeIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/rutgersesports">
                <Image src={twitchIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/rutgersesports">
                <Image src={facebookIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rutgers-esports">
                <Image src={linkedinIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rutgersesports">
                <Image src={githubIcon} className={styles['social-icon']} alt="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-end']}>
        Original Website Built & Designed by{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/novialriptide">
          Andrew Hong
        </a>
        <br />
      </div>
    </>
  )
}
