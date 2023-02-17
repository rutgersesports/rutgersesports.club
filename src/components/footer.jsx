import React from 'react'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles['footer']}>
        <div className={styles['footer-row']}>
          <div className={styles['footer-col']}>
            <h3>Rutgers Esports</h3>
            Rutgers Esports is a student-run collegiate esports organization at Rutgers University - New Brunswick. We
            have no affiliation with the Esports Center located on Busch Campus; for all Esports Center inquiries,
            please visit esports.rutgers.edu.
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
            <div className={styles['socials']}>
              <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/rutgersesports">
                <i className="fab fa-discord social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/RutgersEsports">
                <i className="fab fa-twitter social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/rutgersesports">
                <i className="fab fa-instagram social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/rutgersesports">
                <i className="fab fa-youtube social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/rutgersesports">
                <i className="fab fa-twitch social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/rutgersesports">
                <i className="fab fa-facebook social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rutgers-esports">
                <i className="fab fa-linkedin social-icon fa-xl"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rutgersesports">
                <i className="fab fa-github social-icon fa-xl"></i>
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
