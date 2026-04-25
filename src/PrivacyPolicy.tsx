import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
    return (
        <main className="privacy-page">
            <section className="privacy-card">
                <p className="privacy-eyebrow">Hoemp</p>
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
                    locally on your device or directly through trusted third-party
                    services such as Google.
                </p>
                <p>
                    As a result, we do not collect, store, or process personal data on our
                    own infrastructure.
                </p>

                <h2>2. Google Sign-In</h2>
                <p>
                    You may choose to sign in using your Google account. This is optional.
                </p>
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
                    Hoemp does not operate its own backend servers and does not store
                    copies of your Google Drive files.
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
                <p>
                    Hoemp does not collect or store personal data.
                </p>
                <p>
                    Some anonymous usage statistics may be collected automatically by
                    platform providers (such as app stores). These are outside of our
                    control and are not stored by Hoemp.
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
                    You may also delete any files created by Hoemp directly from your
                    Google Drive.
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
            </section>
        </main>
    );
}
