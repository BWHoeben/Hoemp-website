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
            <p className="privacy-updated">Last updated: May 2, 2026</p>

            <p className="privacy-intro">
                Hoemp is designed to collect as little data as possible. We do not
                operate backend servers and do not store any
                personal data on our own infrastructure.
            </p>

            <h2>1. Overview</h2>
            <p>
                Hoemp does not operate its own backend servers. The app stores your
                progress locally on your device and may use platform-provided backup or
                sync services, such as iCloud on iOS and Android Backup on Android.
            </p>
            <p>
                We do not collect, store, sell, or share personal data on our own
                infrastructure.
            </p>

            <h2>2. No account required</h2>
            <p>
                Hoemp does not require you to sign in with a third
                party account to use the app.
            </p>

            <h2>3. Local storage</h2>
            <p>
                Your progress is stored locally on your device using app storage
                provided by the operating system.
            </p>
            <p>
                This data may include your app progress, settings, and other small
                pieces of information needed for the app to function.
            </p>

            <h2>4. iCloud sync on iOS</h2>
            <p>
                On iOS, Hoemp may use iCloud to synchronize your progress between your
                Apple devices, if iCloud is enabled on your device and available for the
                app.
            </p>
            <p>
                This data is stored in your own iCloud account. Hoemp does not operate
                servers that receive or store this data.
            </p>

            <h2>5. Android Backup</h2>
            <p>
                On Android, your locally stored app data may be included in Android’s
                system backup, depending on your device settings and Google account
                backup configuration.
            </p>
            <p>
                This backup is managed by Android and Google. Hoemp does not control when
                backups are created or restored.
            </p>

            <h2>6. Data collection</h2>
            <p>
                Hoemp does not collect or store personal data on its own servers.
            </p>
            <p>
                Some anonymous usage statistics or crash information may be collected
                automatically by platform providers, such as app stores or operating
                systems. This is outside of Hoemp’s control and is not stored by Hoemp.
            </p>

            <h2>7. Data retention</h2>
            <p>
                Since Hoemp does not operate backend servers or store personal data, we
                do not retain user data on our own infrastructure.
            </p>
            <p>
                Data stored locally, in iCloud, in Android Backup, or in exported files
                remains under your control and the control of the relevant platform
                provider.
            </p>

            <h2>8. Data deletion</h2>
            <p>
                You can delete locally stored app data by deleting the app or clearing
                the app’s data through your device settings.
            </p>
            <p>
                You can manage iCloud data through your Apple device settings and Android
                backup data through your Android or Google account settings.
            </p>

            <h2>9. Security</h2>
            <p>
                Hoemp uses platform-provided storage, backup, and sync mechanisms. While
                we take reasonable care in app design, no digital system can be
                guaranteed to be completely secure.
            </p>

            <h2>10. Changes to this policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Updates will be
                posted on this page with a revised date.
            </p>

            <h2>11. Contact</h2>
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
            <p className="privacy-updated">Laatst bijgewerkt: 2 mei 2026</p>

            <p className="privacy-intro">
                Hoemp is ontworpen om zo weinig mogelijk gegevens te gebruiken. We
                gebruiken geen eigen backendservers en slaan geen
                persoonsgegevens op onze eigen infrastructuur op.
            </p>

            <h2>1. Overzicht</h2>
            <p>
                Hoemp gebruikt geen eigen backendservers. De app slaat je voortgang
                lokaal op je apparaat op en kan gebruikmaken van back-up- of
                synchronisatiediensten van het platform, zoals iCloud op iOS en Android
                Backup op Android.
            </p>
            <p>
                Wij verzamelen, bewaren, verkopen of delen geen persoonsgegevens op onze
                eigen infrastructuur.
            </p>

            <h2>2. Geen login nodig</h2>
            <p>
                Hoemp vereist niet dat je inlogt met een account
                van een externe aanbieder om de app te gebruiken.
            </p>

            <h2>3. Lokale opslag</h2>
            <p>
                Je voortgang wordt lokaal op je apparaat opgeslagen met app-opslag die
                door het besturingssysteem wordt geleverd.
            </p>
            <p>
                Deze gegevens kunnen bestaan uit je appvoortgang, instellingen en andere
                kleine gegevens die nodig zijn om de app te laten werken.
            </p>

            <h2>4. iCloud-synchronisatie op iOS</h2>
            <p>
                Op iOS kan Hoemp iCloud gebruiken om je voortgang tussen je Apple-apparaten
                te synchroniseren, als iCloud op je apparaat is ingeschakeld en beschikbaar
                is voor de app.
            </p>
            <p>
                Deze gegevens worden opgeslagen in je eigen iCloud-account. Hoemp gebruikt
                geen eigen servers die deze gegevens ontvangen of opslaan.
            </p>

            <h2>5. Android Backup</h2>
            <p>
                Op Android kunnen je lokaal opgeslagen appgegevens worden meegenomen in de
                systeemback-up van Android, afhankelijk van je apparaatinstellingen en de
                back-upinstellingen van je Google-account.
            </p>
            <p>
                Deze back-up wordt beheerd door Android en Google. Hoemp bepaalt niet
                wanneer back-ups worden gemaakt of teruggezet.
            </p>

            <h2>6. Gegevensverzameling</h2>
            <p>
                Hoemp verzamelt of bewaart geen persoonsgegevens op eigen servers.
            </p>
            <p>
                Sommige anonieme gebruiksstatistieken of crashinformatie kunnen
                automatisch worden verzameld door platformaanbieders, zoals appstores of
                besturingssystemen. Dit valt buiten de controle van Hoemp en wordt niet
                door Hoemp opgeslagen.
            </p>

            <h2>7. Bewaartermijn</h2>
            <p>
                Omdat Hoemp geen backendservers gebruikt en geen persoonsgegevens opslaat,
                bewaren wij geen gebruikersgegevens op onze eigen infrastructuur.
            </p>
            <p>
                Gegevens die lokaal, in iCloud, in Android Backup of in exportbestanden
                worden opgeslagen, blijven onder jouw controle en onder de controle van de
                betreffende platformaanbieder.
            </p>

            <h2>8. Gegevens verwijderen</h2>
            <p>
                Je kunt lokaal opgeslagen appgegevens verwijderen door de app te
                verwijderen of de appgegevens te wissen via de instellingen van je
                apparaat.
            </p>
            <p>
                Je kunt iCloud-gegevens beheren via de instellingen van je Apple-apparaat
                en Android-back-upgegevens via je Android- of Google-accountinstellingen.
            </p>

            <h2>9. Beveiliging</h2>
            <p>
                Hoemp gebruikt opslag-, back-up- en synchronisatiemechanismen die door
                het platform worden geleverd. Hoewel we zorgvuldig ontwerpen, kan geen
                enkel digitaal systeem volledig veilig worden gegarandeerd.
            </p>

            <h2>10. Wijzigingen in dit beleid</h2>
            <p>
                We kunnen dit privacybeleid van tijd tot tijd bijwerken. Updates worden
                op deze pagina geplaatst met een aangepaste datum.
            </p>

            <h2>11. Contact</h2>
            <p>Heb je vragen over dit privacybeleid? Neem dan contact met ons op via:</p>
            <a className="privacy-email" href="mailto:hoemp123@gmail.com">
                hoemp123@gmail.com
            </a>
        </>
    );
}
