import CopyableItem from "./copyableItem/CopyableItem.tsx";
import './bank-details.css';

export default function BankDetails() {
    return (
        <div className="bank-details-content">
            <CopyableItem label="Naam" value="Vereniging Hoemp" />
            <CopyableItem label="IBAN" value="BE44 9051 4052 7745" />
        </div>
    )
}
