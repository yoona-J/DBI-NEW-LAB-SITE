import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const [showPublicationsMenu, setShowPublicationsMenu] = useState(false)
  const dropdownRef = useRef(null)

  const isActive = (path) => {
    return location.pathname === path
  }

  const handlePublicationsClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPublicationsMenu(!showPublicationsMenu)
  }

  const closePublicationsMenu = () => {
    setShowPublicationsMenu(false)
  }

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPublicationsMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          DBI LAB.
        </Link>
      </div>
      
      <nav className="header-nav">
        <Link 
          to="/research" 
          className={`nav-link ${isActive('/research') ? 'active' : ''}`}
        >
          Research
        </Link>
        
        <div className="nav-dropdown" ref={dropdownRef}>
          <button 
            className={`nav-link dropdown-toggle ${isActive('/selected-publications') || isActive('/work-in-progress-publications') ? 'active' : ''}`}
            onClick={handlePublicationsClick}
            type="button"
          >
            Publications
          </button>
          
          {showPublicationsMenu && (
            <div className="dropdown-menu">
              <Link 
                to="/selected-publications" 
                className="dropdown-item"
                onClick={closePublicationsMenu}
              >
                Selected
              </Link>
              <Link 
                to="/work-in-progress-publications" 
                className="dropdown-item"
                onClick={closePublicationsMenu}
              >
                Work-in-Progress
              </Link>
            </div>
          )}
        </div>
        
        <Link 
          to="/members" 
          className={`nav-link ${isActive('/members') ? 'active' : ''}`}
        >
          Members
        </Link>
        
        <Link 
          to="/projects" 
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
        >
          Projects
        </Link>
        
        <Link 
          to="/courses" 
          className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
        >
          Courses
        </Link>
        
        <Link 
          to="/news" 
          className={`nav-link ${isActive('/news') ? 'active' : ''}`}
        >
          News
        </Link>
      </nav>
    </header>
  )
}