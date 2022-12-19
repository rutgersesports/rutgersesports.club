import './Hero.css'
import heroBackground from '../images/hero-bg-placeholder.jpg'

export default function Hero() {
    return <div className='hero'>
        <img src={heroBackground} alt='Hero Background'/>
        <div className='desc'>
            <h1>Home to casual
                and competitive
                gaming at Rutgers</h1>
        </div>
    </div>
}
