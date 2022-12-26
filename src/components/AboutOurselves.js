import React from 'react';
import './AboutOurselves.css'

export default function AboutOurselves() {
    return <div className='about-ourselves'>
        <h1>About Ourselves</h1>
        <div className='about-ourselves-desc'>
            <div className='desc-col'>
                <p>
                    <h2>Community</h2>
                    We pride ourselves on being an open, friendly, and diverse community. Everyone is welcome here no matter who you are or where you come from.
                </p>
            </div>
            <div className='desc-col'>
                <p>
                    <h2>Casual</h2>
                    Whether you play to win or play for fun, we have a place for you with nearly a dozen clubs dedicated to the most popular video games.
                </p>
            </div>
            <div className='desc-col'>
                <p>
                    <h2>Competitive</h2>
                    Our teams and players are some of the best in the nation with top placings in many of the most well-known collegiate esports tournaments.
                </p>
            </div>
        </div>
    </div>
}
