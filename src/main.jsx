import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Buffer } from 'buffer';
// window.Buffer = Buffer;
// import { Buffer } from 'buffer';
// if (!window.Buffer) {
//   window.Buffer = Buffer;
// }


// // Only polyfill in the browser
// if (typeof window !== 'undefined' && !window.crypto) {
//   import('@peculiar/webcrypto').then(({ Crypto }) => {
//     window.crypto = new Crypto();
//   });
// }
import { Buffer } from 'buffer';
import process from 'process';

if (!window.Buffer) window.Buffer = Buffer;
if (!window.process) window.process = process;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
