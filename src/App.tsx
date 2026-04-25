import {HashRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./Site.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/Hoemp-website" element={<HomePage />}/>
          <Route path="/Hoemp-website/privacyPolicy" element={<PrivacyPolicy />}/>
        </Routes>
      </HashRouter>
  )
}

export default App
