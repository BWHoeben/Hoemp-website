import { Copy } from "lucide-react";

export default function CopyableItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="copyable-item">
            <div className="text">
                <span className="label">{label}</span>
                <span className="value">{value}</span>
            </div>
            <button onClick={() => { debugger }}>
                <Copy color="#1B4846" size="1.2rem" /> Kopiëren
            </button>
        </div>
    )
}
