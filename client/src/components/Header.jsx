import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const [showPublicationsMenu, setShowPublicationsMenu] = useState(false)
  const [showMembersMenu, setShowMembersMenu] = useState(false)
  const publicationsDropdownRef = useRef(null)
  const membersDropdownRef = useRef(null)

  const isActive = (path) => {
    return location.pathname === path
  }

  const handlePublicationsClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPublicationsMenu(!showPublicationsMenu)
    setShowMembersMenu(false) // 다른 드롭다운 닫기
  }

  const handleMembersClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowMembersMenu(!showMembersMenu)
    setShowPublicationsMenu(false) // 다른 드롭다운 닫기
  }

  const closePublicationsMenu = () => {
    setShowPublicationsMenu(false)
  }

  const closeMembersMenu = () => {
    setShowMembersMenu(false)
  }

  // 페이지 이동 시 스크롤을 최상단으로 올리는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (publicationsDropdownRef.current && !publicationsDropdownRef.current.contains(event.target)) {
        setShowPublicationsMenu(false)
      }
      if (membersDropdownRef.current && !membersDropdownRef.current.contains(event.target)) {
        setShowMembersMenu(false)
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
        <Link to="/" className="logo" onClick={scrollToTop}>
          DBI LAB.
        </Link>
      </div>
      
      <nav className="header-nav">
        <Link 
          to="/research" 
          className={`nav-link ${isActive('/research') ? 'active' : ''}`}
          onClick={scrollToTop}
        >
          Research
        </Link>
        
        <div className="nav-dropdown" ref={publicationsDropdownRef}>
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
                onClick={() => {
                  closePublicationsMenu()
                  scrollToTop()
                }}
              >
                Selected
              </Link>
              <Link 
                to="/work-in-progress-publications" 
                className="dropdown-item"
                onClick={() => {
                  closePublicationsMenu()
                  scrollToTop()
                }}
              >
                Work-in-Progress
              </Link>
            </div>
          )}
        </div>
        
        <div className="nav-dropdown" ref={membersDropdownRef}>
          <button 
            className={`nav-link dropdown-toggle ${isActive('/members') ? 'active' : ''}`}
            onClick={handleMembersClick}
            type="button"
          >
            Members
          </button>
          
          {showMembersMenu && (
            <div className="dropdown-menu">
              <Link 
                to="/professor" 
                className="dropdown-item"
                onClick={() => {
                  closeMembersMenu()
                  scrollToTop()
                }}
              >
                Professor
              </Link>
              <Link 
                to="/researchers" 
                className="dropdown-item"
                onClick={() => {
                  closeMembersMenu()
                  scrollToTop()
                }}
              >
                Researchers
              </Link>
              <Link 
                to="/students" 
                className="dropdown-item"
                onClick={() => {
                  closeMembersMenu()
                  scrollToTop()
                }}
              >
                Students
              </Link>
            </div>
          )}
        </div>
        
        <Link 
          to="/projects" 
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          onClick={scrollToTop}
        >
          Projects
        </Link>
        
        <Link 
          to="/courses" 
          className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
          onClick={scrollToTop}
        >
          Courses
        </Link>
        
        <Link 
          to="/news" 
          className={`nav-link ${isActive('/news') ? 'active' : ''}`}
          onClick={scrollToTop}
        >
          News
        </Link>
      </nav>
    </header>
  )
}