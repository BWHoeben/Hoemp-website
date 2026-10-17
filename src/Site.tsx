import './App.css'
import heroImage from './assets/images/hero-image.png'
import googleBadge from './assets/images/google_badge.svg'
import appleBadge from './assets/images/apple_badge.svg'
import { Link } from 'react-router-dom'
import {translations} from "./translations.ts";

export default function HomePage() {
    const language = navigator.language.toLowerCase().split('-')[0]
    const t = language === 'nl' ? translations.nl : translations.en
    const instagramUrl = `https://www.instagram.com/${t.instaHandle}/`

    return (
        <main className="landing-page">
            <section className="landing-content" aria-labelledby="page-title">
                <p className="coming-soon">
                    {t.availability}
                </p>

                <h1 id="page-title" className="landing-headline">
                    {t.headline}<span className="exclamation">!</span>
                </h1>

                <p className="landing-description">
                    {t.followUs}{' '}
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-handle"
                        aria-label={t.instagramLabel}
                    >
                        @{t.instaHandle}
                    </a>{' '}
                    {t.description}
                </p>
                <Link to="/donate" className="cta-button" aria-label={t.donateLabel}>
                    {t.donate}
                </Link>
            </section>

            <figure className="hero-image-container">
                <img
                    src={heroImage}
                    alt={t.heroAlt}
                    className="hero-image"
                />
            </figure>

            <nav className="store-badges" aria-label={t.downloadLabel}>
                <a
                    href="https://play.google.com/store/apps/details?id=com.hoemp.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.googleLabel}
                >
                    <img src={googleBadge} alt="" aria-hidden="true" />
                </a>

                <a
                    href="https://apps.apple.com/nl/app/hoemp/id6748967906"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.appleLabel}
                >
                    <img src={appleBadge} alt="" aria-hidden="true" />
                </a>
            </nav>

            <footer className="landing-footer">
                <Link to="/privacyPolicy">
                    {t.privacy}
                </Link>
            </footer>
        </main>
    )
}
