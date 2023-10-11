import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routers/routers.jsx'
import {RouterProvider} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // eslint-disable-next-line react/jsx-no-undef */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
