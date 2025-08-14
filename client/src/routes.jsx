// src/routes.jsx
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const Home = lazy(() => import('./pages/Home'))
const Research = lazy(() => import('./pages/Research'))
const SelectedPublications = lazy(() => import('./pages/SelectedPublications'))
const WorkInProgressPublications = lazy(() => import('./pages/WorkInProgressPublications'))
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
      { path: 'research', element: <Research /> },
      { path: 'selected-publications', element: <SelectedPublications /> },
      { path: 'work-in-progress-publications', element: <WorkInProgressPublications /> },
      { path: 'members', element: <Members /> },
      { path: 'projects', element: <Projects /> },
      { path: 'courses', element: <Courses /> },
      { path: 'news', element: <News /> },
    ],
  },
])