import React, { useState, useEffect } from 'react'

export function EncryptedText({
  text,
  encryptedClassName = 'text-neutral-500',
  revealedClassName = 'dark:text-white text-black',
  revealDelayMs = 50,
  className = ''
}) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+[]{}|;:,.<>?'
  const [displayText, setDisplayText] = useState(text)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    let timer
    let currentIteration = 0
    const maxIterations = text.length
    
    // Start with random characters of the same length
    setDisplayText(
      text
        .split('')
        .map((char) => (char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
        .join('')
    )

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (index < currentIteration) {
              return char
            }
            if (char === ' ') return ' '
            // Return a random character
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      })

      currentIteration += 1
      if (currentIteration > maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        setIsRevealed(true)
      }
    }, revealDelayMs)

    return () => clearInterval(interval)
  }, [text, revealDelayMs])

  return (
    <span className={className}>
      {displayText.split('').map((char, idx) => {
        const isCharRevealed = isRevealed || (idx < displayText.length && displayText[idx] === text[idx])
        return (
          <span
            key={idx}
            className={isCharRevealed ? revealedClassName : encryptedClassName}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}
