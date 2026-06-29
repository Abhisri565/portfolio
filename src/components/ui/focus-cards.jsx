import React, { useState } from 'react'

export function FocusCards({ children, className = '' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Map over children and clone them, injecting hover props and class names
  const childrenWithHover = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child

    const existingOnMouseEnter = child.props.onMouseEnter
    const existingOnMouseLeave = child.props.onMouseLeave

    return React.cloneElement(child, {
      onMouseEnter: (e) => {
        setHoveredIndex(index)
        if (existingOnMouseEnter) existingOnMouseEnter(e)
      },
      onMouseLeave: (e) => {
        setHoveredIndex(null)
        if (existingOnMouseLeave) existingOnMouseLeave(e)
      },
      className: `${child.props.className || ''} ${
        hoveredIndex !== null && hoveredIndex !== index ? 'card-unfocused' : ''
      }`.trim()
    })
  })

  return <div className={className}>{childrenWithHover}</div>
}
