import { useState } from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
    const [language, setLanguage] = useState<"en" | "nl">("en");
    const isDutch = language === "nl";

    return (
        <main className="privacy-page">
            <section className="privacy-card">
                <div className="privacy-header">
                    <p className="privacy-eyebrow">Hoemp</p>

                    <div className="privacy-language-toggle" aria-label="Language selector">
                        <button
                            type="button"
                            className={language === "en" ? "active" : ""}
                            onClick={() => setLanguage("en")}
                        >
                            English
                        </button>
                        <button
                            type="button"
                            className={language === "nl" ? "active" : ""}
                            onClick={() => setLanguage("nl")}
                        >
                            Nederlands
                        </button>
                    </div>
                </div>

                {isDutch ? <DutchPolicy /> : <EnglishPolicy />}
            </section>
        </main>
    );
}

function EnglishPolicy() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <p className="privacy-updated">Last updated: April 25, 2026</p>

            <p className="privacy-intro">
                Hoemp is designed to collect as little data as possible. We do not run
                backend servers and do not store personal data. This Privacy Policy
                explains what limited data is involved when you use the app.
            </p>

            <h2>1. Overview</h2>
            <p>
                Hoemp does not operate its own backend servers. All functionality runs
                locally on your device or directly through trusted third-party services
                such as Google.
            </p>
            <p>
                As a result, we do not collect, store, or process personal data on our
                own infrastructure.
            </p>

            <h2>2. Google Sign-In</h2>
            <p>You may choose to sign in using your Google account. This is optional.</p>
            <p>
                When you sign in, Google may provide basic profile information such as
                your name and email address.
            </p>
            <p>
                Because Hoemp does not operate backend servers, this information is not
                stored by us and is only used temporarily to authenticate your session.
            </p>

            <h2>3. Google Drive access</h2>
            <p>
                Hoemp may request permission to access your Google Drive to enable core
                functionality such as creating, editing, and deleting files.
            </p>

            <div className="privacy-highlight">
                <strong>Important:</strong> Hoemp only uses Google Drive access to
                perform actions that you explicitly initiate. We do not access your
                files for analytics, advertising, profiling, or any unrelated purpose.
            </div>

            <p>
                Hoemp does not operate its own backend servers and does not store copies
                of your Google Drive files.
            </p>
            <p>
                All file operations happen directly between your device and Google’s
                infrastructure. Your data remains within your Google account at all
                times.
            </p>

            <ul>
                <li>Create files in your Google Drive</li>
                <li>Edit files used by the app</li>
                <li>Delete files when you choose to do so</li>
            </ul>

            <h2>4. How we use Google user data</h2>
            <p>Google user data is used only to:</p>
            <ul>
                <li>Authenticate you during sign-in</li>
                <li>Enable interaction with your Google Drive</li>
                <li>Provide the core functionality of the app</li>
            </ul>
            <p>
                We do not sell, share, or use Google user data for advertising,
                analytics, or any secondary purposes.
            </p>

            <h2>5. Data collection</h2>
            <p>Hoemp does not collect or store personal data.</p>
            <p>
                Some anonymous usage statistics may be collected automatically by
                platform providers (such as app stores). These are outside of our control
                and are not stored by Hoemp.
            </p>

            <h2>6. Data retention</h2>
            <p>
                Since Hoemp does not operate backend servers or store personal data, we
                do not retain any user data.
            </p>

            <h2>7. Data deletion</h2>
            <p>
                You can revoke Hoemp’s access to your Google account at any time via
                your Google Account settings.
            </p>
            <p>
                You may also delete any files created by Hoemp directly from your Google
                Drive.
            </p>

            <h2>8. Security</h2>
            <p>
                We rely on Google’s secure authentication and authorization systems.
                While we take reasonable care in design, no digital system can be
                guaranteed to be completely secure.
            </p>

            <h2>9. Changes to this policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Updates will be
                posted on this page with a revised date.
            </p>

            <h2>10. Contact</h2>
            <p>If you have any questions, you can contact us at:</p>
            <a className="privacy-email" href="mailto:hoemp123@gmail.com">
                hoemp123@gmail.com
            </a>
        </>
    );
}

function DutchPolicy() {
    return (
        <>
            <h1>Privacybeleid</h1>
            <p className="privacy-updated">Laatst bijgewerkt: 25 april 2026</p>

            <p className="privacy-intro">
                Hoemp is ontworpen om zo weinig mogelijk gegevens te gebruiken. We
                draaien geen eigen backendservers en slaan geen persoonsgegevens op. Dit
                privacybeleid legt uit welke beperkte gegevens betrokken zijn wanneer je
                de app gebruikt.
            </p>

            <h2>1. Overzicht</h2>
            <p>
                Hoemp gebruikt geen eigen backendservers. Alle functionaliteit draait
                lokaal op je apparaat of rechtstreeks via vertrouwde externe diensten
                zoals Google.
            </p>
            <p>
                Daardoor verzamelen, bewaren of verwerken wij geen persoonsgegevens op
                onze eigen infrastructuur.
            </p>

            <h2>2. Inloggen met Google</h2>
            <p>Je kunt ervoor kiezen om in te loggen met je Google-account. Dit is optioneel.</p>
            <p>
                Wanneer je inlogt, kan Google basisprofielinformatie delen, zoals je
                naam en e-mailadres.
            </p>
            <p>
                Omdat Hoemp geen backendservers gebruikt, wordt deze informatie niet
                door ons opgeslagen en alleen tijdelijk gebruikt om je sessie te
                authenticeren.
            </p>

            <h2>3. Toegang tot Google Drive</h2>
            <p>
                Hoemp kan toestemming vragen voor toegang tot je Google Drive om
                kernfunctionaliteit mogelijk te maken, zoals het aanmaken, bewerken en
                verwijderen van bestanden.
            </p>

            <div className="privacy-highlight">
                <strong>Belangrijk:</strong> Hoemp gebruikt Google Drive-toegang alleen
                om acties uit te voeren die jij expliciet start. We gebruiken je
                bestanden niet voor analytics, advertenties, profilering of andere
                niet-gerelateerde doeleinden.
            </div>

            <p>
                Hoemp gebruikt geen eigen backendservers en slaat geen kopieën van je
                Google Drive-bestanden op.
            </p>
            <p>
                Alle bestandsacties verlopen rechtstreeks tussen jouw apparaat en de
                infrastructuur van Google. Je gegevens blijven altijd binnen je eigen
                Google-account.
            </p>

            <ul>
                <li>Bestanden aanmaken in je Google Drive</li>
                <li>Bestanden bewerken die door de app worden gebruikt</li>
                <li>Bestanden verwijderen wanneer jij daarvoor kiest</li>
            </ul>

            <h2>4. Hoe we Google-gebruikersgegevens gebruiken</h2>
            <p>Google-gebruikersgegevens worden alleen gebruikt om:</p>
            <ul>
                <li>Je te authenticeren tijdens het inloggen</li>
                <li>Interactie met je Google Drive mogelijk te maken</li>
                <li>De kernfunctionaliteit van de app te leveren</li>
            </ul>
            <p>
                We verkopen, delen of gebruiken Google-gebruikersgegevens niet voor
                advertenties, analytics of andere secundaire doeleinden.
            </p>

            <h2>5. Gegevensverzameling</h2>
            <p>Hoemp verzamelt of bewaart geen persoonsgegevens.</p>
            <p>
                Sommige anonieme gebruiksstatistieken kunnen automatisch worden
                verzameld door platformaanbieders, zoals appstores. Dit valt buiten onze
                controle en wordt niet door Hoemp opgeslagen.
            </p>

            <h2>6. Bewaartermijn</h2>
            <p>
                Omdat Hoemp geen backendservers gebruikt en geen persoonsgegevens
                opslaat, bewaren wij geen gebruikersgegevens.
            </p>

            <h2>7. Gegevens verwijderen</h2>
            <p>
                Je kunt de toegang van Hoemp tot je Google-account op elk moment intrekken
                via je Google-accountinstellingen.
            </p>
            <p>
                Je kunt bestanden die door Hoemp zijn aangemaakt ook rechtstreeks uit je
                Google Drive verwijderen.
            </p>

            <h2>8. Beveiliging</h2>
            <p>
                We vertrouwen op de beveiligde authenticatie- en autorisatiesystemen van
                Google. Hoewel we zorgvuldig ontwerpen, kan geen enkel digitaal systeem
                volledig veilig worden gegarandeerd.
            </p>

            <h2>9. Wijzigingen in dit beleid</h2>
            <p>
                We kunnen dit privacybeleid van tijd tot tijd bijwerken. Updates worden
                op deze pagina geplaatst met een aangepaste datum.
            </p>

            <h2>10. Contact</h2>
            <p>Heb je vragen over dit privacybeleid? Neem dan contact met ons op via:</p>
            <a className="privacy-email" href="mailto:hoemp123@gmail.com">
                hoemp123@gmail.com
            </a>
        </>
    );
}
