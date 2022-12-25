import './AboutOurselves.css'
import communityImage from '../images/community-image-2048x1365.jpg'

export default function AboutOurselves() {
    return <div className='about-ourselves'>
        <h1>About Ourselves</h1>
        <div className='about-ourselves-desc'>
            <img src={communityImage} alt='Community'/>
            <p>
                <strong>Community</strong><br/>
                We pride ourselves on being an open, friendly, and diverse community. Everyone is welcome here no matter who you are or where you come from.<br/>
                <strong>Play Casually</strong><br/>
                Whether you play to win or play for fun, we have a place for you with nearly a dozen clubs dedicated to the most popular video games.<br/>
                <strong>Play Competitively</strong><br/>
                Our teams and players are some of the best in the nation with top placings in many of the most well-known collegiate esports tournaments.<br/>
            </p>
        </div>
    </div>
}
