import React from 'react';
import './AboutOurselves.css'
import communityImage from '../images/community-image-2048x1365.jpg'

export default function AboutOurselves() {
    return <div className='about-ourselves'>
        <h1>About Ourselves</h1>
        <div className='about-ourselves-desc'>
            <img src={communityImage} alt='Community'/>
            <p>
                Rutgers Esports is a large community focused on providing a welcoming
                and inclusive environment for the gaming community at Rutgers University.
                We pride ourselves on being an open, friendly, and diverse community.
                Everyone is welcome here no matter who you are or where you come from.
                Whether you play to win or play for fun, we have a place for you with
                nearly a dozen clubs dedicated to the most popular video games. Our teams
                and players are some of the best in the nation with top placings in many
                of the most well-known collegiate esports tournaments.
            </p>
        </div>
    </div>
}
