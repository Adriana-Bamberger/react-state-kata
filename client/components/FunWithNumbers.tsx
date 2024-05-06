import { useState } from 'react'

function FunWithNumbers() {
  // TODO: create state
  const [currentNum, setCurrentNum] = useState(5)
  return (
    <>
      <h2>Fun with Numbers</h2>
      <p>{currentNum}</p>

      {/* TODO: create onClick code to update the state for each button */}
      <button
        onClick={() => {
          setCurrentNum(currentNum + 5)
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          setCurrentNum(currentNum * 5)
        }}
      >
        x5
      </button>
      <button
        onClick={() => {
          setCurrentNum(currentNum - 5)
        }}
      >
        -5
      </button>
      <button
        onClick={() => {
          setCurrentNum(currentNum * 0)
        }}
      >
        Clear
      </button>
    </>
  )
}

export default FunWithNumbers
