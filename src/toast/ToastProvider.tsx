import React, {
    createContext,
    type ReactNode,
    useContext,
    useState,
} from 'react'
import './toast.css'

type Toast = {
    content: ReactNode | string
}

type ToastContextType = {
    showToast: (content: ReactNode | string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({children}: { children: React.ReactNode }) {
    const [toast, setToast] = useState<Toast | null>(null)

    const showToast = (content: ReactNode | string, duration = 1500) => {
        setToast({ content })
        setTimeout(() => {
            setToast(null)
        }, duration)
    }

    return (
        <ToastContext.Provider value={{showToast}}>
            <>
                {children}
                <div className="toast-container">
                    {toast && (<div className="toast">
                        {toast.content}
                    </div>)}
                </div>
            </>
        </ToastContext.Provider>
    )
}

export const useToast = (): ((
    content: ReactNode | string,
    duration?: number
) => void) => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context.showToast
}
