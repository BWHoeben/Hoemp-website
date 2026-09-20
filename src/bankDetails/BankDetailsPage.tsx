import BankDetails from "./BankDetails.tsx";
import "./bankDetailsPage.css";
import LogoWithText from "./LogoWithText.tsx";
import BackgroundGraphic from "../BackgroundGraphic.tsx";
import { useLanguage } from "../i18n";

export default function BankDetailsPage() {
    const [language] = useLanguage();
    const isDutch = language === "nl";

    return (
        <div className="bank-details-page">
            <BackgroundGraphic />
            <div className="bank-details-page-content">
                <LogoWithText text="Hoemp!" />
                <h1>{isDutch ? "Steun Hoemp!" : "Support Hoemp!"}</h1>
                <p>
                    {isDutch
                        ? "Bedankt voor je steun aan Hoemp! Maak een bankoverschrijving naar onderstaande rekening en kopieer de betaalgegevens eenvoudig naar je bankapp."
                        : "Thank you for supporting Hoemp! Make a bank transfer to the account below and easily copy the payment details to your banking app."}
                </p>
                <BankDetails isDutch={isDutch} />
            </div>
        </div>
    )
}
