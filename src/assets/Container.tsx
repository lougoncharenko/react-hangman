import React, {useState} from 'react'
import words from './wordList.json'
import './Container.css'
import { HangmanDrawing } from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

export const Container = () => {
    const [wordGuess, setWordGuess] = useState(() => {
      return words[Math.floor(Math.random() * words.length)]
    })
    const [guessedLetters, setGueesedLetters] = useState<string[]>([])

  return (
    <div className= 'container' >
      <div className='results'> Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}