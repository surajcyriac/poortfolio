import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Only polyfill in the browser
if (typeof window !== 'undefined' && !window.crypto) {
  import('@peculiar/webcrypto').then(({ Crypto }) => {
    window.crypto = new Crypto();
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
