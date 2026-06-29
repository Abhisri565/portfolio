import React from 'react'
import { FocusCards } from './components/ui/focus-cards'

function Projects() {
  const mainProjects = [
    {
      title: 'Expense Tracker Application',
      bullets: [
        'Developed a full-stack expense management system using React.js, integrating a RESTful API with complete CRUD functionality.',
        'Implemented global state management using React Context API to handle transactions, balance calculations, and error states.',
        'Designed a responsive front end with clean data visualisations and optimized API communication using Axios.'
      ],
      tag: 'Full Stack Integration',
      imageText: 'Expense Engine'
    },
    {
      title: 'Real-Time Inventory Dashboard',
      bullets: [
        'Built a high-performance inventory manager using Spring Boot, Spring Data JPA, and MySQL.',
        'Configured optimized query joins and direct connection scripts to manage real-time warehouse data flow.',
        'Created a clean React.js reporting table that loads live status changes with instant search filtering.'
      ],
      tag: 'Database & Backend',
      imageText: 'Inventory Sync'
    }
  ]

  const miniProjects = [
    {
      title: 'Personal Portfolio Website',
      bullets: [
        'Built a responsive Braun-styled web page with Vite, React.js, and pure CSS3.',
        'Integrated modular JSX components and custom interactive glow effects.'
      ],
      imageText: 'Portfolio Site'
    },
    {
      title: 'Task Planner Application',
      bullets: [
        'Created a local storage-backed scheduler using React functional state.',
        'Designed pure CSS grid elements with simple category filters.'
      ],
      imageText: 'Task App'
    },
    {
      title: 'Automated Billing CLI tool',
      bullets: [
        'Engineered a Java console app that reads database tables using JDBC.',
        'Generates formatted text invoices and logs customer transaction files.'
      ],
      imageText: 'Billing Engine'
    }
  ]

  return (
    <section id="projects" className="projects-section container">
      <div className="projects-title-block">
        <span className="section-label">Selected Works</span>
        <h2 style={{ fontSize: '1.9rem' }}>Featured & Mini Projects</h2>
      </div>

      {/* Main Highlighted Projects */}
      <div className="projects-group">
        <div className="projects-group-title">Featured Main Projects</div>
        <FocusCards className="main-projects-grid">
          {mainProjects.map((project, index) => (
            <div className="project-card-main" key={index}>
              <div className="project-img-container">
                <div className="project-img-placeholder">
                  {project.imageText}
                </div>
              </div>
              <div className="project-content">
                <span className="section-label" style={{ color: 'var(--color-tertiary)' }}>{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <ul className="project-desc-list">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </FocusCards>
      </div>

      {/* Mini Projects (Differentiable, less highlighted) */}
      <div className="projects-group" style={{ marginTop: 'var(--spacing-lg)' }}>
        <div className="projects-group-title">Additional Mini Projects</div>
        <FocusCards className="mini-projects-grid">
          {miniProjects.map((project, index) => (
            <div className="project-card-mini" key={index}>
              <div className="project-img-container-mini">
                <div className="project-img-placeholder-mini">
                  {project.imageText}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                <h3 className="project-title" style={{ margin: 0 }}>{project.title}</h3>
                <span className="section-label" style={{ fontSize: '0.6rem', margin: 0 }}>Mini</span>
              </div>
              <ul className="project-desc-list" style={{ margin: 0 }}>
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </FocusCards>
      </div>
    </section>
  )
}

export default Projects

