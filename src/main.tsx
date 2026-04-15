import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import './index.css'

// Register service worker with auto-update
registerSW({
  onNeedRefresh() {
    // Could show a "new version available" toast here
    console.log('[SafePaw] New content available, will update on next visit.')
  },
  onOfflineReady() {
    console.log('[SafePaw] App is ready to work offline.')
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
