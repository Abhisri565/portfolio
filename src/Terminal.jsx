import React, { useState, useEffect } from 'react'

export function Terminal({ 
  commands = [], 
  outputs = {}, 
  typingSpeed = 45, 
  delayBetweenCommands = 1000 
}) {
  const [visibleLines, setVisibleLines] = useState([])
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentTypedText, setCurrentTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return

    const command = commands[currentCommandIndex]
    setIsTyping(true)
    let charIndex = 0
    setCurrentTypedText('')

    const typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        setCurrentTypedText((prev) => prev + command[charIndex])
        charIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
        
        // Command typing finished. Append the command to visible lines
        setVisibleLines((prev) => [...prev, { type: 'command', text: `$ ${command}` }])
        setCurrentTypedText('')

        // Trigger output after a brief pause
        setTimeout(() => {
          const cmdOutput = outputs[currentCommandIndex] || []
          if (cmdOutput.length > 0) {
            setVisibleLines((prev) => [
              ...prev,
              ...cmdOutput.map(line => ({ type: 'output', text: line }))
            ])
          }

          // Move to next command after output delay
          setTimeout(() => {
            setCurrentCommandIndex((prev) => prev + 1)
          }, delayBetweenCommands)
        }, 300)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [currentCommandIndex, commands, outputs, typingSpeed, delayBetweenCommands])

  return (
    <div className="terminal-window" style={{
      backgroundColor: '#0F1113',
      color: '#E7E5E1',
      fontFamily: 'var(--font-label)',
      fontSize: '0.8rem',
      borderRadius: 'var(--rounded-lg)',
      border: '1px solid var(--color-secondary)',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
      width: '100%',
      maxWidth: '550px',
      margin: '0 auto'
    }}>
      {/* Top Bar with window controls */}
      <div className="terminal-header" style={{
        backgroundColor: '#1E2124',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #2A2E33'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }}></span>
        </div>
        <div style={{ color: '#6B6F74', fontSize: '0.65rem' }}>psa-dev — terminal</div>
        <div style={{ width: '42px' }}></div> {/* balancing element */}
      </div>

      {/* Terminal Content Screen */}
      <div className="terminal-body" style={{
        padding: '15px',
        minHeight: '260px',
        maxHeight: '350px',
        overflowY: 'auto',
        textAlign: 'left',
        lineHeight: '1.4'
      }}>
        {visibleLines.map((line, idx) => (
          <div key={idx} style={{ 
            color: line.type === 'command' ? 'var(--color-tertiary)' : '#E7E5E1',
            marginBottom: '4px',
            whiteSpace: 'pre-wrap'
          }}>
            {line.text}
          </div>
        ))}
        {isTyping && (
          <div style={{ color: 'var(--color-tertiary)' }}>
            $ {currentTypedText}
            <span className="terminal-cursor" style={{
              animation: 'blink 1s step-end infinite',
              borderRight: '2px solid var(--color-tertiary)',
              marginLeft: '2px'
            }}>&nbsp;</span>
          </div>
        )}
        {!isTyping && currentCommandIndex < commands.length && (
          <div style={{ color: 'var(--color-tertiary)' }}>
            $ 
            <span className="terminal-cursor" style={{
              animation: 'blink 1s step-end infinite',
              borderRight: '2px solid var(--color-tertiary)',
              marginLeft: '2px'
            }}>&nbsp;</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--color-tertiary) }
        }
      `}</style>
    </div>
  )
}
