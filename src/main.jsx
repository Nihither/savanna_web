import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/boots.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './css/custom.css'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
