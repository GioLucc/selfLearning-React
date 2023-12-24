import React from 'react'
import ReactDOM from 'react-dom/client'
import * as components from './firstComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <components.Greeting/>
    <components.AlternativeGreeting/>
  </React.StrictMode>,
)
