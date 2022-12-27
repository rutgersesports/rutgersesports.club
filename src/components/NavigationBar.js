import React from 'react';
import rutgersEsportsLogo from '../images/rutgersesports-logo.png'
import './NavigationBar.css'

export default function NavigationBar() {
    return <div className='nav'>
        <div className='esports-logo'>
            <a href="/"><img src={rutgersEsportsLogo} alt='Rutgers Esports Logo'/></a>
        </div>
    </div>
}
