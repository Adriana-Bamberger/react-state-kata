import { useState } from 'react'

function ListShenanigans() {
  const [lists, setLists] = useState({
    left: [
      'Apple',
      'DVD Player',
      'Mysterious Smell',
      'Pompom Hat',
      'Praying Mantis',
      'Skeletor',
    ],
    right: [
      'Caltrops',
      'Chad Maywether Jr.',
      'Comedy Bang! Bang!',
      'Freshly Cut Grass',
      'Stop Sign',
    ],
  })

  function handleMoveLeft(item: string) {
    setLists({
      right: lists.right.filter((string) => string !== item),
      left: [...lists.left, item].sort(),
    })
  }

  function handleMoveRight(item: string) {
    setLists({
      left: lists.left.filter((string) => string !== item),
      right: [...lists.right, item].sort(),
    })
  }

  return (
    <>
      <h2>List Shenanigans</h2>
      <section className="container">
        {/* left list */}
        <ul>
          {lists.left.map((item) => (
            <li key={item}>
              {item} <button onClick={() => handleMoveRight(item)}>→</button>
            </li>
          ))}
        </ul>
        {/* right list */}
        <ul>
          {lists.right.map((item) => (
            <li key={item}>
              {item} <button onClick={() => handleMoveLeft(item)}>←</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ListShenanigans
