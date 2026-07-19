import {CircleCheck} from "lucide-react";

export default function ToastSuccess({ message }: { message: string }) {
    return (
        <div className="toast-content">
            <CircleCheck color="white" fill="green" size="1.5rem"/>
            {message}
        </div>
    )
}
