import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

export default function Trail ({ open, children }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { tension: 120, friction: 12, clamp: true },
      opacity: open ? 1 : 0,
      x: open ? 0 : 100,
      from: { opacity: 0, x: 100 }
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }