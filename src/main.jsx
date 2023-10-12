import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routers/routers.jsx'
import {RouterProvider} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // eslint-disable-next-line react/jsx-no-undef */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
