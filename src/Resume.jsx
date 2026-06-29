import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume-section container">
      <span className="section-label">Documentation</span>
      <h2 style={{ fontSize: '1.9rem', marginBottom: 'var(--spacing-md)' }}>Curriculum Vitae</h2>
      
      <div className="resume-box">
        <div className="resume-info">
          <h3>Polisetty Sunayana Abhisri - Resume</h3>
          <p>Format: PDF | Including experience, educational qualifications, projects, and certifications</p>
        </div>
        <div className="resume-actions">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            View Document
          </a>
          <a 
            href="/resume.pdf" 
            download="Polisetty_Sunayana_Abhisri_Resume.pdf" 
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
