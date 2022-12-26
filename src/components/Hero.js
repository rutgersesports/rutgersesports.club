import React from 'react';
import backgroundVideo from '../videos/hero-background.mp4';
import './Hero.css';

export default function Hero() {
    return <div className='hero'>
        <video id="background-video" playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">
            <source src={backgroundVideo} type="video/mp4"/>
        </video>
        <div className='hero-text'>
            <h1>Home to casual<br/>
                and competitive<br/>
                gaming at Rutgers
            </h1>
        </div>
    </div>
}
