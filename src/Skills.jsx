import React from 'react'

function Skills() {
  const skillsList = [
    {
      name: 'Java',
      bullets: [
        'Expertise in Object-Oriented programming structures and Collections framework.',
        'Developing robust, clean core logic with efficient design patterns.'
      ]
    },
    {
      name: 'Spring Boot',
      bullets: [
        'Building standalone REST APIs and MVC controller structures.',
        'Configuring IoC dependencies, configuration properties, and database entities.'
      ]
    },
    {
      name: 'JDBC & Servlets',
      bullets: [
        'Establishing persistent database connections and executing direct SQL queries.',
        'Handling web request cycles and routing using core Java servlet structures.'
      ]
    },
    {
      name: 'MySQL',
      bullets: [
        'Structuring relational database tables, foreign keys, and indexes.',
        'Writing optimized query scripts, joins, and database operations.'
      ]
    },
    {
      name: 'React.js',
      bullets: [
        'Developing component-driven applications with state and props.',
        'Managing routing, event handling, and conditional DOM rendering.'
      ]
    },
    {
      name: 'JavaScript',
      bullets: [
        'Implementing ES6+ features, promises, asynchronous fetches, and DOM manipulation.',
        'Handling dynamic event-driven validation and user interactions.'
      ]
    },
    {
      name: 'HTML5',
      bullets: [
        'Creating semantic HTML documents for accessible and SEO-friendly structures.',
        'Building clean, modern web architectures with structured form fields.'
      ]
    },
    {
      name: 'CSS3',
      bullets: [
        'Crafting responsive designs utilizing Flexbox, CSS Grid, and media queries.',
        'Implementing custom styling variables, flat layouts, and smooth animations.'
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section container">
      <div className="skills-layout">
        <div>
          <span className="section-label">Capabilities</span>
          <h2 style={{ fontSize: '1.9rem', marginBottom: 'var(--spacing-md)' }}>Technical Stack</h2>
          <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
            A disciplined collection of tools and frameworks focused on creating fast, reliable web applications from database schema to UI styling.
          </p>
        </div>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <ul>
                {skill.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
