import React, {useState} from 'react'
import words from './wordList.json'

export const Container = () => {
    const [wordGuess, setWordGuess] = useState(() => {
      return words[Math.floor(Math.random() * words.length)]
    })

  return (
    <div>
      <p>{wordGuess}</p>

    </div>
  )
}