import { useEffect } from "react";

function HashRedirect() {
    useEffect(() => {
        if (window.location.hash.startsWith("#/")) {
            const path = window.location.hash.slice(1); // "/privacyPolicy"
            window.history.replaceState({}, "", path);
            window.location.reload();
        }
    }, []);

    return null;
}

export default HashRedirect;
