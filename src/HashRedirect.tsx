import { useEffect } from "react";

function HashRedirect() {
    useEffect(() => {
        const { pathname, search, hash } = window.location;

        // Fix malformed Instagram URLs like /donate&utm_source=...
        if (pathname.includes("/donate") && pathname !== "/donate") {
            window.history.replaceState({}, "", `/donate${search}`);
            window.location.reload();
            return;
        }

        // Convert old hash URLs to BrowserRouter URLs
        if (hash.startsWith("#/")) {
            const path = hash.slice(1); // "/privacyPolicy"
            window.history.replaceState({}, "", `${path}${search}`);
            window.location.reload();
        }
    }, []);

    return null;
}

export default HashRedirect;
