import React from 'react'
import ReactDOM from 'react-dom/client'
import * as variablesFile from './variables'
//Simple import above doesnt work properly


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <variablesFile.Variables/>
  </React.StrictMode>,
)
