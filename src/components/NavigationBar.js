import rutgersEsportsLogo from '../images/rutgersesports-logo.png'
import './NavigationBar.css'

export default function NavigationBar() {
    return <div className='nav'>
        <div className='esports-logo'>
            <img src={rutgersEsportsLogo} alt='Rutgers Esports Logo'/>
        </div>
    </div>
}
