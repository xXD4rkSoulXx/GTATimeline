import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Index from './Pages/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="relative w-full h-screen bg-black">
      <Index />
    </main>
  </StrictMode>,
)
