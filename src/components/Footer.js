import React from "react";
import discordIcon from "../icons/discord.svg";
import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
import twitchIcon from "../icons/twitch.svg";
import twitterIcon from "../icons/twitter.svg";
import linkedinIcon from "../icons/linkedin.svg";
import githubIcon from "../icons/github.svg";
import youtubeIcon from "../icons/youtube.svg";
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/rutgersesports"
              >
                <i className="fab fa-discord social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/RutgersEsports"
              >
                <i className="fab fa-twitter social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/rutgersesports"
              >
                <i className="fab fa-instagram social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/rutgersesports"
              >
                <i className="fab fa-youtube social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitch.tv/rutgersesports"
              >
                <i className="fab fa-twitch social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/rutgersesports"
              >
                <i className="fab fa-facebook social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/rutgers-esports"
              >
                <i className="fab fa-linkedin social-icon fa-xl"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rutgersesports"
              >
                <i className="fab fa-github social-icon fa-xl"></i>
              </a>
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
