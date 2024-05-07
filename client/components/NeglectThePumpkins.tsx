import pumpkinImages from '../images/index.ts'
//this was not here, adding it stopped th page from crashing
import { useState } from 'react'

// new array with the images place holder things.
const allPumpkins = ['first', 'second', 'third'] as const
type Pumpkin = (typeof allPumpkins)[number]
const decay = [
  'A cheerfully fresh Jack-o-Lantern',
  'A couple of days have passed and the Jack-o-Lantern is looking somewhat wrinkly',
  "Half of the Jack-o-Lantern's face is sagging as the pumpkin begins to collapse",
  "This Jack-o-Lantern is returning to the Earth from whence it came. Fungus and maggots infest it's once bright mortal shell",
]

// make a state and set it to zero
function NeglectThePumpkins() {
  const [pumpkinpics, setPumpkinpics] = useState({
    first: 0,
    second: 0,
    third: 0,
  })

  // changes the image, rests when you get to the last image.
  function handleClick(pumpkin: Pumpkin) {
    if (pumpkinpics[pumpkin] === 3) {
      setPumpkinpics({
        ...pumpkinpics,
        [pumpkin]: 0,
      })
    } else {
      setPumpkinpics({
        ...pumpkinpics,
        [pumpkin]: pumpkinpics[pumpkin] + 1,
      })
    }
  }
  // on click when the button is pressed change the image src to the next image in the array
  //and change the alt text to the next text in the array.
  // array of images is called pumpkinImages

  // itterate thorough pumpkinImages each time the button is clicked.
  // itterate through "decay" each time the button is clicked. (it has 4 strings)

  // the screen display stuff.
  return (
    <>
      {allPumpkins.map((pumpkin) => (
        <button
          data-testid={`${pumpkin} pumpkin`}
          key={pumpkin}
          onClick={() => handleClick(pumpkin)}
          className="p-button"
        >
          <img
            id={pumpkin}
            className="pumpkin"
            src={`client/images/pumpkin-${pumpkinpics[pumpkin]}.png`}
            alt={`${decay[pumpkinpics[pumpkin]]} - ${pumpkin} pumpkin`}
          />
        </button>
      ))}
    </>
  )
}
export default NeglectThePumpkins
