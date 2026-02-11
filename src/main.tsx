import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/afacad/400.css'
import '@fontsource/afacad/500.css'
import '@fontsource/afacad/600.css'
import '@fontsource/afacad/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
