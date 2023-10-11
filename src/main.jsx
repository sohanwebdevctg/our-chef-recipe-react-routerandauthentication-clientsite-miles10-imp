import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // eslint-disable-next-line react/jsx-no-undef */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
