import BackgroundCircle from "./BackgroundCircle.tsx";
import './thankYou.css'

export default function ThankYou() {
    return (
        <div className="celebration-page">
            <div className="confetti" />
            <BackgroundCircle color="var(--bg-color-3)" top={90} />
            <BackgroundCircle color="var(--link-bg-color-3)" top={75} />
            <BackgroundCircle color="#405CAC" />
            <div className="celebration-page-content">
                <h2>Je bent een topper!</h2>
                <h1>Heel erg bedankt voor je steun!</h1>
                <p>Dankzij jouw bijdrage kan Hoemp! blijven groeien! We waarderen het enorm dat je dit project steunt. Veel luisterplezier en wie weet hoor je straks weer een nieuwe vogel.</p>
            </div>
        </div>
    )
}
