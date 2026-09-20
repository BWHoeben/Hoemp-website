import './App.css'
import heroImage from './assets/images/hero-image.png'
import googleBadge from './assets/images/google_badge.svg'
import appleBadge from './assets/images/apple_badge.svg'
import { Link } from 'react-router-dom'
import { useLanguage } from './i18n'

export default function HomePage() {
    const [language] = useLanguage()
    const isDutch = language === 'nl'
    const instagramUrl = 'https://www.instagram.com/hoemp.app/'

    return (
        <main className="landing-page">
            <section className="landing-content" aria-labelledby="page-title">
                <p className="coming-soon">
                    {isDutch
                        ? 'Beschikbaar in de App Store en Google Play Store'
                        : 'Available in the App Store and Google Play Store'}
                </p>

                <h1 id="page-title" className="landing-headline">
                    {isDutch ? 'Leer vogelgeluiden met Hoemp' : 'Learn bird sounds with Hoemp'}
                    <span className="exclamation">!</span>
                </h1>

                <p className="landing-description">
                    {isDutch ? 'Volg ons op Instagram ' : 'Follow us on Instagram '}
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-handle"
                        aria-label={isDutch
                            ? 'Volg Hoemp op Instagram, opent in een nieuw tabblad'
                            : 'Follow Hoemp on Instagram, opens in a new tab'}
                    >
                        @hoemp.app
                    </a>{' '}
                    {isDutch
                        ? 'om op de hoogte te blijven van de laatste ontwikkelingen. Enthousiast over Hoemp? Met jouw steun kunnen we de app blijven verbeteren en uitbreiden.'
                        : 'to stay up to date with the latest developments. Excited about Hoemp? Your support helps us continue to improve and expand the app.'}
                </p>
                <Link
                    to="/donate"
                    className="cta-button"
                    aria-label={isDutch
                        ? 'Steun Hoemp via bankoverschrijving'
                        : 'Support Hoemp via bank transfer'}
                >
                    {isDutch ? 'Steun Hoemp!' : 'Support Hoemp!'}
                </Link>
            </section>

            <figure className="hero-image-container">
                <img
                    src={heroImage}
                    alt="Voorbeeld van de Hoemp-app waarmee je vogelgeluiden leert herkennen"
                    className="hero-image"
                />
            </figure>

            <nav className="store-badges" aria-label={isDutch ? 'Download Hoemp' : 'Download Hoemp'}>
                <a
                    href="https://play.google.com/store/apps/details?id=com.hoemp.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isDutch
                        ? 'Download Hoemp in de Google Play Store, opent in een nieuw tabblad'
                        : 'Download Hoemp from the Google Play Store, opens in a new tab'}
                >
                    <img src={googleBadge} alt="" aria-hidden="true" />
                </a>

                <a
                    href="https://apps.apple.com/nl/app/hoemp/id6748967906"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isDutch
                        ? 'Download Hoemp in de App Store, opent in een nieuw tabblad'
                        : 'Download Hoemp from the App Store, opens in a new tab'}
                >
                    <img src={appleBadge} alt="" aria-hidden="true" />
                </a>
            </nav>

            <footer className="landing-footer">
                <Link to="/privacyPolicy">
                    {isDutch ? 'Bekijk ons privacybeleid' : 'View our privacy policy'}
                </Link>
            </footer>
        </main>
    )
}
