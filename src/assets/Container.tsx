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
    const incorrectLetters = guessedLetters.filter(
      letter => !wordGuess.includes(letter))
      
  return (
    <div className= 'container' >
      <div className='results'> Lose Win</div>
      <HangmanDrawing 
      numberOfGuesses = {incorrectLetters.length}
      />
      <HiddenWord 
      guessedLetters = {guessedLetters}
      word = {wordGuess}
      />
      <div style={{
        alignSelf: 'stretch'
      }}>
        <Keyboard />
      </div>
      
    </div>
  )
}