import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const Globalstyle =createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    background-color: #323334;
    color: white;
    min-height: 100vh;
    font-family: "Inter", sans-serif;;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyle/>
    <App />
  </StrictMode>,
)
