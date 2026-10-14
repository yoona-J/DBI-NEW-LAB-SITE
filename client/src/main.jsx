import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import { installChunkRecovery } from './utils/chunkRecovery'

import './styles/global.css'
import 'antd/dist/reset.css'

installChunkRecovery()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)