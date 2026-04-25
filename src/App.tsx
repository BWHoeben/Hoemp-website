import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./Site.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomePage />}/>
          <Route path="privacyPolicy" element={<PrivacyPolicy />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
