// src/routes.jsx
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const Home = lazy(() => import('./pages/Home'))
const Research = lazy(() => import('./pages/Research'))
const Publications = lazy(() => import('./pages/Publications'))
const Members = lazy(() => import('./pages/Members'))
const Projects = lazy(() => import('./pages/Projects'))
const Courses = lazy(() => import('./pages/Courses'))
const News = lazy(() => import('./pages/News'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Research', element: <Research /> },
      { path: 'Publications', element: <Publications /> },
      { path: 'Members', element: <Members /> },
      { path: 'Projects', element: <Projects /> },
      { path: 'Courses', element: <Courses /> },
      { path: 'News', element: <News /> },
    ],
  },
])