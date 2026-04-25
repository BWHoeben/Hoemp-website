import './App.css'
import heroImage from './assets/images/hero-image.png'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const instagramUrl = 'https://www.instagram.com/hoemp.app/'

    return (
        <div className="landing-page">
            <div className="landing-content">
                <p className="coming-soon">
                    Binnenkort in de App Store en Google Play Store
                </p>

                <h1 className="landing-headline">
                    Leer vogelgeluiden met Hoemp<span className="exclamation">!</span>
                </h1>

                <p className="landing-description">
                    Wil je weten welke vogel je hoort fluiten, roepen of 'hoemp' zeggen?
                    Met Hoemp leer je vogelgeluiden herkennen op een eenvoudige en leuke
                    manier. Volg ons op Instagram{' '}
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-handle"
                    >
                        @hoemp.app
                    </a>{' '}
                    en blijf op de hoogte van de ontwikkelingen.
                </p>

                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    Volg ons op Instagram!
                </a>
            </div>

            <div className="hero-image-container">
                <img src={heroImage} alt="Hoemp app preview" className="hero-image" />
            </div>
            <Link to="privacyPolicy">Bekijk ons privacy-beleid</Link>
        </div>
    )
}
