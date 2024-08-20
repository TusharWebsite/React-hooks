import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './nav.jsx'
import Container from './container.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Container/>
  </StrictMode>,
)
