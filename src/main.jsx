import React from 'react'
import ReactDOM from 'react-dom/client'
import { Calculator } from './Calculator.jsx'
import { ModeProvider } from './context/ModeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeProvider>
      <Calculator />
    </ModeProvider>
  </React.StrictMode>,
)
