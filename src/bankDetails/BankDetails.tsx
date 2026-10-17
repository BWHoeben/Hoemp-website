import CopyableItem from "./copyableItem/CopyableItem.tsx";
import './bank-details.css';
import useTranslation from "../useTranslation.ts";

export default function BankDetails() {
    const t = useTranslation()

    return (
        <div className="bank-details-content">
            <CopyableItem label={t.name} value="Vereniging Hoemp" />
            <CopyableItem label={t.iban} value="BE44 9051 4052 7745" />
        </div>
    )
}
