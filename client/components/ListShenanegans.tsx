import { useState } from 'react'

function ListShenanegans() {
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

  return (
    <>
      <h2>List Shenanegans</h2>
      <section className="container">
        {/* left list */}
        <ul>
          {lists.left.map((item) => (
            <li key={item}>
              {item} <button>→</button>
            </li>
          ))}
        </ul>
        {/* right list */}
        {/* use the ← character for the button in this list */}
        <ul></ul>
      </section>
    </>
  )
}

export default ListShenanegans
