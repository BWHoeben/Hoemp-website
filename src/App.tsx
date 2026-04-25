import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Site";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
