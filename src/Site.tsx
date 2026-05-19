import './App.css'
import heroImage from './assets/images/hero-image.png'
import googleBadge from './assets/images/google_badge.svg'
import appleBadge from './assets/images/apple_badge.svg'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const instagramUrl = 'https://www.instagram.com/hoemp.app/'
    const mollieUrl = 'https://payment-links.mollie.com/payment/XqWmpvcX6idGscWqKpFHK'

    return (
        <main className="landing-page">
            <section className="landing-content" aria-labelledby="page-title">
                <p className="coming-soon">
                    Beschikbaar in de App Store en Google Play Store
                </p>

                <h1 id="page-title" className="landing-headline">
                    Leer vogelgeluiden met Hoemp<span className="exclamation">!</span>
                </h1>

                <p className="landing-description">
                    Volg ons op Instagram{' '}
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-handle"
                        aria-label="Volg Hoemp op Instagram, opent in een nieuw tabblad"
                    >
                        @hoemp.app
                    </a>{' '}
                    om op de hoogte te blijven van de laatste ontwikkelingen. Enthousiast
                    over Hoemp? Met jouw steun kunnen we de app blijven verbeteren en
                    uitbreiden.
                </p>

                <a
                    href={mollieUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                    aria-label="Steun Hoemp via Mollie, opent in een nieuw tabblad"
                >
                    Steun Hoemp!
                </a>
            </section>

            <figure className="hero-image-container">
                <img
                    src={heroImage}
                    alt="Voorbeeld van de Hoemp-app waarmee je vogelgeluiden leert herkennen"
                    className="hero-image"
                />
            </figure>

            <nav className="store-badges" aria-label="Download Hoemp">
                <a
                    href="https://play.google.com/store/apps/details?id=com.hoemp.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Hoemp in de Google Play Store, opent in een nieuw tabblad"
                >
                    <img src={googleBadge} alt="" aria-hidden="true" />
                </a>

                <a
                    href="https://apps.apple.com/nl/app/hoemp/id6748967906"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Hoemp in de App Store, opent in een nieuw tabblad"
                >
                    <img src={appleBadge} alt="" aria-hidden="true" />
                </a>
            </nav>

            <footer className="landing-footer">
                <Link to="/privacyPolicy">
                    Bekijk ons privacybeleid
                </Link>
            </footer>
        </main>
    )
}
