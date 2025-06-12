import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Index from './Pages/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
