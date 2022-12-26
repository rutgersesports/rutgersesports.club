import React from 'react';
import './Footer.css';

export default function Footer() {
    return <div className='footer'>
        <div className='footer-grid'>
            <div className='footer-block'>
                <p>
                    <h3>Rutgers Esports</h3><br/>
                    Part of <a target="_blank" rel="noopener noreferrer" href="http://sca.rutgers.edu/">Rutgers University Student Center and Activities</a><br/>
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
                    <h3>Social Media</h3><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/rutgersesports">Discord</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/rutgersesports">Twitch</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/RutgersEsports">Twitter</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/rutgersesports">Instagram</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/rutgersesports">Facebook</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/rutgersesports">Youtube</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rutgers-esports">LinkedIn</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rutgersesports">GitHub</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="mailto: rutgersesports@gmail.com">Email</a><br/>
                </p>
            </div>
        </div>
        <div className='footer-end'>
            Website Built & Designed by <a target="_blank" rel="noopener noreferrer" href="https://github.com/novialriptide">Andrew Hong</a><br/>
        </div>
    </div>
}