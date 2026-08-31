import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthcontextProvider } from './context/AuthContextProvider.jsx'
import { CookiesProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider></CookiesProvider>
    <AuthcontextProvider defaultsetOptions={{path: "/"}}>
    <App />
    </AuthcontextProvider>
  </StrictMode>,
);