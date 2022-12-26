import React from 'react';
import './Footer.css';

export default function Footer() {
    return <div className='footer'>
        <div className='footer-grid'>
            <div className='footer-block'>
                <p>
                    <h3>Rutgers Esports</h3><br/>
                    Part of <a href="http://sca.rutgers.edu/">Rutgers University Student Center and Activities</a><br/>
                    604 Bartholomew Rd, Piscataway, New Jersey, United States, 08854
                </p>
            </div>
            <div className='footer-block'>
                <p>
                    <h3>Related Links</h3><br/>
                    <a href="https://github.com/rutgersesports/rutgersverifybot">Email Verification Discord Bot</a><br/>
                    <a href="admin-login">Adminstrator Login</a><br/>
                    <a href="apply">Job Positions</a><br/>
                </p>
            </div>
            <div className='footer-block'>
                <p>
                    <h3>Rutgers Esports Social Media</h3><br/>
                    <a href="https://discord.gg/rutgersesports">Discord</a><br/>
                    <a href="https://twitch.tv/rutgersesports">Twitch</a><br/>
                    <a href="https://twitter.com/RutgersEsports">Twitter</a><br/>
                    <a href="https://instagram.com/rutgersesports">Instagram</a><br/>
                    <a href="https://facebook.com/rutgersesports">Facebook</a><br/>
                    <a href="https://youtube.com/rutgersesports">Youtube</a><br/>
                    <a href="https://www.linkedin.com/company/rutgers-esports">LinkedIn</a><br/>
                    <a href="https://github.com/rutgersesports">GitHub</a><br/>
                    <a href="mailto: rutgersesports@gmail.com">Email</a><br/>
                </p>
            </div>
        </div>
        <div className='footer-end'>
            Website Built & Designed by <a href="https://github.com/novialriptide">Andrew Hong</a><br/>
        </div>
    </div>
}