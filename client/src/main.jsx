import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store } from './app/store.js'

import { createBrowserRouter, Router, RouterProvider } from "react-router"

import LandingPage from './pages/LandingPage.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />

  },
  {
    element: <ProtectedRoute />,
    children:
      [{
        element: <Layout />,
        children: [
          {
            path: "/jobs",
            element: <LandingPage />
          },
          {
            path: "/about",
            element: <LandingPage />
          },
          {
            path: "/contact",
            element: <LandingPage />
          }
        ]
      }]
  }

])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)