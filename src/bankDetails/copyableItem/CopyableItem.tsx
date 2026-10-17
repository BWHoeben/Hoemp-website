import { Copy} from "lucide-react";
import {useToast} from "../../toast/ToastProvider.tsx";
import ToastSuccess from "../../toast/ToastSuccess.tsx";
import useTranslation from "../../useTranslation.ts";

export default function CopyableItem({ label, value }: { label: string, value: string }) {
    const t = useTranslation()

    const showToast = useToast();

    async function handleCopy() {
        navigator.clipboard.writeText(value).then(() => {
            showToast(<ToastSuccess message={t.copied} />);
        }).catch(() => {
            showToast(<div className="toast-content">{t.copyError}</div>)
        })
    }

    return (
        <div className="copyable-item">
            <div className="text">
                <span className="label">{label}</span>
                <span className="value">{value}</span>
            </div>
            <button onClick={handleCopy}>
                <Copy color="#1B4846" size="1.2rem" /> {t.copy}
            </button>
        </div>
    )
}
