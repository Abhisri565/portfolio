import React, { useState, useRef } from 'react'
import { EncryptedText } from './components/ui/encrypted-text'

function Hero() {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [translateZ, setTranslateZ] = useState(0)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    
    const rY = (mouseX / (width / 2)) * 12
    const rX = -(mouseY / (height / 2)) * 12
    
    setRotateX(rX)
    setRotateY(rY)
    setTranslateZ(15)
  }

  const handleTouchMove = (e) => {
    if (!cardRef.current || e.touches.length === 0) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const touch = e.touches[0]
    const touchX = touch.clientX - rect.left - width / 2
    const touchY = touch.clientY - rect.top - height / 2
    
    const rY = (touchX / (width / 2)) * 12
    const rX = -(touchY / (height / 2)) * 12
    
    setRotateX(rX)
    setRotateY(rY)
    setTranslateZ(15)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setTranslateZ(0)
  }

  return (
    <section id="about" className="hero container">
      <div className="grid-2" style={{ alignItems: 'center' }}>
        {/* Left Side: Original 3D Info Card */}
        <div style={{ perspective: '1000px', width: '100%' }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.15s ease',
              transformStyle: 'preserve-3d',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid rgba(163, 167, 175, 0.2)',
              borderRadius: 'var(--rounded-lg)',
              padding: 'var(--spacing-lg)',
              boxShadow: translateZ > 0 
                ? '0 20px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(255, 106, 0, 0.15)' 
                : '0 10px 25px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              position: 'relative'
            }}
          >
            <div style={{ transform: 'translateZ(40px)', transition: 'transform 0.15s ease' }}>
              <span className="section-label" style={{ marginBottom: '4px' }}>Overview</span>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: '1.2', color: '#FFFFFF' }}>
                <EncryptedText
                  text="Polisetty Sunayana Abhisri"
                  encryptedClassName="text-neutral-500"
                  revealedClassName="text-white"
                  revealDelayMs={50}
                />
              </h1>



              <div className="hero-subtitle" style={{ margin: '4px 0 0 0' }}>Java Full Stack Developer</div>
            </div>


            {/* Description Text */}
            <p 
              className="hero-description" 
              style={{ 
                fontSize: '0.92rem', 
                marginTop: 'var(--spacing-md)',
                color: 'var(--color-secondary)',
                transform: 'translateZ(30px)',
                transition: 'transform 0.15s ease',
                lineHeight: '1.6'
              }}
            >
              Passionate software engineer specializing in building high-performance, robust, and scalable web applications. 
              Trained in modern Java Full Stack architectures, including enterprise backend services with Spring Boot and Spring MVC, 
              relational database designs using MySQL and JDBC, and highly reactive user interfaces using React.js and CSS3. 
              Focused on creating clean, API-first integrations with optimal query execution and seamless component-driven frontends.
            </p>

            {/* Button */}
            <div style={{ 
              marginTop: 'var(--spacing-lg)',
              transform: 'translateZ(45px)',
              transition: 'transform 0.15s ease'
            }}>
              <a 
                href="#contact" 
                className="btn-primary" 
                style={{ 
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Code Editor Display with Circle Profile Pic at the top and code below */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%',
          perspective: '1000px'
        }}>
          <div className="ide-profile-card" style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid rgba(163, 167, 175, 0.2)',
            borderRadius: 'var(--rounded-lg)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
            width: '100%',
            maxWidth: '360px',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* IDE Header */}
            <div style={{
              backgroundColor: '#0F1113',
              borderBottom: '1px solid rgba(163, 167, 175, 0.15)',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }}></span>
              </div>
              <div style={{
                backgroundColor: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid var(--color-tertiary)',
                borderRadius: '2px 2px 0 0',
                padding: '2px 8px',
                fontFamily: 'var(--font-label)',
                fontSize: '0.62rem',
                color: 'var(--color-tertiary)'
              }}>
                ☕ DeveloperInfo.java
              </div>
              <div style={{ width: '42px' }}></div>
            </div>

            {/* Profile Picture (Circular) at the Top of IDE */}
            <div style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'rgba(15, 17, 19, 0.4)',
              borderBottom: '1px solid rgba(163, 167, 175, 0.15)'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--color-tertiary)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
                width: '180px',
                height: '180px'
              }}>
                <img 
                  src="/profile.jpg" 
                  alt="Polisetty Sunayana Abhisri" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }} 
                />
              </div>
            </div>

            {/* Code Editing Display Below the Picture */}
            <div style={{
              padding: '16px',
              fontFamily: 'var(--font-label)',
              fontSize: '0.72rem',
              lineHeight: '1.45',
              backgroundColor: '#0F1113',
              color: 'var(--color-primary)',
              display: 'flex'
            }}>
              {/* line gutter */}
              <div style={{
                color: 'var(--color-secondary)',
                marginRight: '12px',
                textAlign: 'right',
                userSelect: 'none',
                opacity: 0.4
              }}>
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
              </div>

              {/* java code details */}
              <div style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
                <span style={{ color: '#C5A5E8' }}>public class</span> <span style={{ color: '#57B5E8' }}>Sunayana</span> &#123;<br />
                &nbsp;&nbsp;String <span style={{ color: '#FFBD2E' }}>name</span> = <span style={{ color: 'var(--color-tertiary)' }}>"Polisetty Sunayana Abhisri"</span>;<br />
                &nbsp;&nbsp;String <span style={{ color: '#FFBD2E' }}>role</span> = <span style={{ color: 'var(--color-tertiary)' }}>"Java Full Stack Dev"</span>;<br />
                &nbsp;&nbsp;String[] <span style={{ color: '#FFBD2E' }}>stack</span> = &#123;<span style={{ color: '#57B5E8' }}>"Spring Boot", "React", "MySQL"</span>&#125;;<br />
                &#125;
              </div>

            </div>
          </div>

          <style>{`
            .ide-profile-card:hover {
              transform: translateY(-8px);
              border-color: var(--color-tertiary);
              box-shadow: 0 20px 45px rgba(255, 106, 0, 0.35);
            }
            .ide-profile-card:hover img {
              transform: scale(1.05);
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default Hero
