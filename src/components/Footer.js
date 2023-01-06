import React from "react";
import discordIcon from "../icons/discord.svg";
import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
import twitchIcon from "../icons/twitch.svg";
import twitterIcon from "../icons/twitter.svg";
import linkedinIcon from "../icons/linkedin.svg";
import githubIcon from "../icons/github.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h3>Rutgers Esports</h3>
            Rutgers Esports is a student-run collegiate esports organization at
            Rutgers University - New Brunswick. We have no affiliation with the
            Esports Center located on Busch Campus; for all Esports Center
            inquiries, please visit esports.rutgers.edu.
          </div>
          <div className="footer-col">
            <h3>Relative Links</h3>
            <ul>
              <li>
                <a href="https://github.com/rutgersesports/rutgersverifybot">
                  Email Verification Discord Bot
                </a>
              </li>
              <li>
                <a href="https://github.com/rutgersesports/rutgersesports.club">
                  Website Source Code
                </a>
              </li>
              <li>
                <Link to="apply">Volunteer Positions</Link>
              </li>
            </ul>
            <div className="socials">
              <img
                src={discordIcon}
                className="social-icon"
                alt="social-icon"
              />
              <img
                src={facebookIcon}
                className="social-icon"
                alt="social-icon"
              />
              <img
                src={instagramIcon}
                className="social-icon"
                alt="social-icon"
              />
              <img src={twitchIcon} className="social-icon" alt="social-icon" />
              <img
                src={twitterIcon}
                className="social-icon"
                alt="social-icon"
              />
              <img
                src={linkedinIcon}
                className="social-icon"
                alt="social-icon"
              />
              <img src={githubIcon} className="social-icon" alt="social-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        Original Website Built & Designed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/novialriptide"
        >
          Andrew Hong
        </a>
        <br />
      </div>
    </>
  );
}
