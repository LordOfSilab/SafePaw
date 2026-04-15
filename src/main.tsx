import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import './index.css'

// Register service worker.
// When a new build is deployed, Workbox detects the new SW and calls
// onNeedRefresh — we show a toast and let the user reload immediately
// instead of waiting for the next app restart.
const updateSW = registerSW({
  onNeedRefresh() {
    showUpdateToast()
  },
  onOfflineReady() {
    console.log('[SafePaw] App is ready to work offline.')
  },
})

function showUpdateToast() {
  // Create a simple toast DOM element — no React needed at this level
  const toast = document.createElement('div')
  toast.setAttribute('role', 'alert')
  toast.style.cssText = `
    position: fixed;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #1C1208;
    color: #FDE68A;
    border: 1px solid #92400E;
    border-radius: 1rem;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-family: system-ui, sans-serif;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    white-space: nowrap;
  `

  toast.innerHTML = `
    <span>🐾 New data available</span>
    <button id="sw-update-btn" style="
      background: #F59E0B;
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.35rem 0.75rem;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    ">Update now</button>
    <button id="sw-dismiss-btn" style="
      background: transparent;
      color: #92400E;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      padding: 0 0.25rem;
    ">✕</button>
  `

  document.body.appendChild(toast)

  document.getElementById('sw-update-btn')?.addEventListener('click', () => {
    updateSW(true) // skipWaiting + reload
  })

  document.getElementById('sw-dismiss-btn')?.addEventListener('click', () => {
    toast.remove()
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
