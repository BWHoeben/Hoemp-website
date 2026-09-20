import BackgroundCircle from "./BackgroundCircle.tsx";
import './thankYou.css'
import { useLanguage } from "./i18n";

export default function ThankYou() {
    const [language] = useLanguage();
    const isDutch = language === "nl";

    return (
        <div className="celebration-page">
            <div className="confetti" />
            <BackgroundCircle color="var(--bg-color-3)" top={90} />
            <BackgroundCircle color="var(--link-bg-color-3)" top={75} />
            <BackgroundCircle color="#405CAC" />
            <div className="celebration-page-content">
                <h2>{isDutch ? "Je bent een topper!" : "You are amazing!"}</h2>
                <h1>{isDutch ? "Heel erg bedankt voor je steun!" : "Thank you so much for your support!"}</h1>
                <p>
                    {isDutch
                        ? "Dankzij jouw bijdrage kan Hoemp! blijven groeien! We waarderen het enorm dat je dit project steunt. Veel luisterplezier en wie weet hoor je straks weer een nieuwe vogel."
                        : "Thanks to your contribution, Hoemp! can keep growing! We really appreciate your support for this project. Enjoy listening, and who knows, maybe you will soon hear another new bird."}
                </p>
            </div>
        </div>
    )
}
