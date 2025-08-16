import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Buffer } from 'buffer'
import process from 'process'

if (!window.Buffer) window.Buffer = Buffer
if (!window.process) window.process = process

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
