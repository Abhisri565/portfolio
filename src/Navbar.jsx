import React from 'react'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#about" className="logo-link">
          <img src="/logo.jpg" alt="Logo" className="logo-img" />
          <span>a.dev</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#resume">Resume</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
