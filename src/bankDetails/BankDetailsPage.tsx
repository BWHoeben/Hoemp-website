import BankDetails from "./BankDetails.tsx";
import "./BankDetailsPage.css";
import LogoWithText from "./LogoWithText.tsx";
import BackgroundGraphic from "../BackgroundGraphic.tsx";
import useTranslation from "../useTranslation.ts";

export default function BankDetailsPage() {
    const t = useTranslation()

    return (
        <div className="bank-details-page">
            <BackgroundGraphic />
            <div className="bank-details-page-content">
                <LogoWithText text="Hoemp!" />
                <h1>{t.donate}</h1>
                <p>{t.donateThankYou}</p>
                <BankDetails />
            </div>
        </div>
    )
}
