import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './MyComponents/Intro'
import './CSS/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro />
  </StrictMode>,
)
