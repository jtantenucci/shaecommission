import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

export default function Trail2 ({ open, children }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { tension: 120, friction: 12, clamp: true },
      opacity: 1,
      from: { opacity: 0 }
    })
    return (
      <div>
        {trail.map(({ opacity, ...style }, index) => (
          <a.div key={index} style={style}>
            <a.div style={{ opacity }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }