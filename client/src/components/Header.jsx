import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        DBI LAB.
      </Link>
      <nav className="header-nav">
        <Link to="/research">Research</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/members">Members</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/news">News</Link>
      </nav>
    </header>
  )
}