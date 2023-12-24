import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import * as components from './variables'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    {/* Props are methods to comunicate parent components with childs */}
    <components.Variables title= 'Variables' subtitle = 'And Props' version= '40'/>
  </React.StrictMode>,
)
