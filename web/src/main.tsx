import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './css/global.css'

// @ts-ignore
import { ThemeProvider } from './components/ThemeContext'
// @ts-ignore
import Background from './components/Background'
// @ts-ignore
import Toggle from './components/ThemeToggle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <button className="absolute right-0 top-0">
          <Toggle />
        </button>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
)
