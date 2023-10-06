import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProv from './providers/AuthProv'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProv>
    <RouterProvider router={router}></RouterProvider>
    </AuthProv>
  </React.StrictMode>,
)
