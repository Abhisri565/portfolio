import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submit
    console.log('Submitted contact request:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="contact-section container">
      <div className="contact-layout">
        <div>
          <span className="section-label">Communication</span>
          <h2 style={{ fontSize: '1.9rem', marginBottom: 'var(--spacing-md)' }}>Get in Touch</h2>
          <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)', maxWidth: '400px' }}>
            Have a project in mind, a job opportunity, or just want to connect? Send a message directly or reach out on social channels.
          </p>

          <div className="contact-socials">
            <a 
              href="https://github.com/Abhisri565" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card"
            >
              <div className="social-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="social-details">
                <h4>GitHub Profile</h4>
                <p>github.com/Abhisri565</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/abhisripolisetty" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card"
            >
              <div className="social-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="social-details">
                <h4>LinkedIn Network</h4>
                <p>linkedin.com/in/abhisripolisetty</p>
              </div>
            </a>
          </div>
        </div>

        <div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
