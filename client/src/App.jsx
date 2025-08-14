// src/App.jsx
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/Components.css'

export default function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading…</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}