import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./Site";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import ThankYou from "./ThankYou.tsx";
import BankDetailsPage from "./bankDetails/BankDetailsPage.tsx";
import {ToastProvider} from "./toast/ToastProvider.tsx";
import HashRedirect from "./HashRedirect.tsx";

function App() {
    return (
        <ToastProvider>
            <HashRedirect />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
                    <Route path="/#/privacyPolicy" element={<PrivacyPolicy/>}/>
                    <Route path="/bedankt" element={<ThankYou/>}/>
                    <Route path="/donate" element={<BankDetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </ToastProvider>
    );
}

export default App;
