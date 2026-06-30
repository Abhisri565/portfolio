import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#about" className="logo-link" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Logo" className="logo-img" />
          <span>a.dev</span>
        </a>
        
        {/* Mobile Toggle Button */}
        <button 
          className="nav-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            /* Close Icon (X) */
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item"><a href="#about" onClick={closeMenu}>About</a></li>
            <li className="nav-item"><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li className="nav-item"><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li className="nav-item"><a href="#resume" onClick={closeMenu}>Resume</a></li>
            <li className="nav-item"><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

