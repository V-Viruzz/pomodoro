import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InputProvider } from './context/inputContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InputProvider>
    <App />
  </InputProvider>
)
