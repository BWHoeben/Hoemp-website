import hoemoLogo from '../assets/images/hoemp-logo.svg'
import './logo-with-text.css'

export default function LogoWithText({ text }: { text: string }) {
    return (
        <div className="logo-with-text">
            <img src={hoemoLogo} alt="Hoemp Logo" className="logo" />
            <span className="text">{text}</span>
        </div>
    )
}
