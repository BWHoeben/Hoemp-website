import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Site";
import PrivacyPolicy from "./PrivacyPolicy";
import ThankYou from "./ThankYou.tsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/bedankt" element={<ThankYou />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
