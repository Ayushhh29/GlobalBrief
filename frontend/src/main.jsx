import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from "@react-oauth/google";



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <GoogleOAuthProvider
      clientId="664989564269-cs2c6jlv7uuhgthhhucq2mni5r93fugl.apps.googleusercontent.com"
    >

      <App />

      <ToastContainer />

    </GoogleOAuthProvider>

  </StrictMode>
)