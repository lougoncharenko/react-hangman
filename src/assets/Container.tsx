import React, {useState} from 'react'
import words from './wordList.json'
import './Container.css'
import { HangmanDrawing } from './HangmanDrawing'
import HiddenWord from './HiddenWord'
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
      <HiddenWord />
      <div style={{
        alignSelf: 'stretch'
      }}>
        <Keyboard />
      </div>
      
    </div>
  )
}