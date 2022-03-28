import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Auth0ProviderWithHistory } from './auth'
import { BrowserRouter as Router } from 'react-router-dom'
/**
 * CSS
 */
import "./static/css/bootstrap.min.css"
import "./static/css/style.css"
/**
 * JS
 */
import "./static/js/bootstrap.bundle.min.js"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App/>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
