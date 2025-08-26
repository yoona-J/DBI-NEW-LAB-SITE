import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'

// Font imports
import './assets/fonts/Roboto-Regular.woff2'
import './assets/fonts/Roboto-Medium.woff2'
import './assets/fonts/Roboto-Light.woff2'
import './assets/fonts/DungGeunMo.woff2'

import './styles/global.css'
import 'antd/dist/reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)