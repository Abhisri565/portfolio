import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <img src="/logo.jpg" alt="Logo" className="logo-img" style={{ width: '28px', height: '28px' }} />
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              a.dev
            </span>
          </div>

          <ul className="footer-contacts">
            <li>
              <a href="mailto:abhisripolisetty565@gmail.com" className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>abhisripolisetty565@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+919866715979" className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span>+91 9866715979</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Abhisri565" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhisripolisetty" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-copyright">
          © {currentYear} Polisetty Sunayana Abhisri. All Rights Reserved. Built with Braun Design Grid guidelines.
        </div>
      </div>
    </footer>
  )
}

export default Footer
