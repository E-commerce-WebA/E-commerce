import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/font.css"
import "./styles/index.css"
import "./styles/tailwind.css"
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
