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
        <button className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </button>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
)
