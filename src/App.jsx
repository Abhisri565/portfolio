import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import ContactForm from './ContactForm.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
