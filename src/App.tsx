import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Site";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import ThankYou from "./ThankYou.tsx";
import BankDetailsPage from "./bankDetails/BankDetailsPage.tsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/bedankt" element={<ThankYou />} />
                <Route path="/bankDetails" element={<BankDetailsPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
