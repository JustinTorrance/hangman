import React from 'react'

const WrongLetters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {WrongLetters.length > 0 && <p>Wrong</p>}
        {WrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)
        }
      </div>
    </div>
  )
}

export default WrongLetters
