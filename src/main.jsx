import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ChatProvider } from './context/ChatContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </HelmetProvider>
  </StrictMode>,
)
