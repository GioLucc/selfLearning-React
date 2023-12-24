import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import * as components from './variables'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <components.Variables/>
  </React.StrictMode>,
)
