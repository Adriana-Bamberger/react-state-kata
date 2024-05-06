import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState(getColor())
  const [lock, setLock] = useState(false)

  function getColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  return (
    <div
      className="pixel"
      style={{ background: color }}
      onClick={() => {
        if (lock == false) {
          setColor(getColor())
        }
      }}
      onDoubleClick={() => {
        setColor('black')
        setLock(true)
      }}
      onContextMenu={() => {
        setColor(getColor())
        setLock(false)
        event?.preventDefault()
      }}
    ></div>
  )
}

export default Pixel
