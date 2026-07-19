import BankDetails from "./BankDetails.tsx";
import "./BankDetailsPage.css";
import LogoWithText from "./LogoWithText.tsx";
import BackgroundGraphic from "../BackgroundGraphic.tsx";

export default function BankDetailsPage() {
    return (
        <div className="bank-details-page">
            <BackgroundGraphic />
            <div className="bank-details-page-content">
                <LogoWithText text="Hoemp!" />
                <h1>Steun Hoemp!</h1>
                <p>Bedankt voor je steun aan Hoemp! Maak een bankoverschrijving naar onderstaande rekening en kopieer de betaalgegevens eenvoudig naar je bankapp.</p>
                <BankDetails />
            </div>
        </div>
    )
}
