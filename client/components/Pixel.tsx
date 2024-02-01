import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState(getColor())

  function getColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  return <div className="pixel" style={{ background: color }}></div>
}

export default Pixel
