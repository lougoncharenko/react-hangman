import React, {useState, useEffect, useCallback} from 'react'
import words from './wordList.json'
import './Container.css'
import { HangmanDrawing } from './HangmanDrawing'
import HiddenWord from './HiddenWord'
import Keyboard from './Keyboard'

export const Container = () => {
    const [wordGuess, setWordGuess] = useState(() => {
      return words[Math.floor(Math.random() * words.length)]
    })
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter(
      letter => !wordGuess.includes(letter))
    
      //prevents useEffect from re-rendering
    const addGuessedLetter = useCallback(
    (letter:string) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters] 
    )

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
        if (!key.match(/^[a-z]$/)) return
        e.preventDefault()
        addGuessedLetter(key)
      }
      document.addEventListener("keypress", handler)
      return () => {
      document.removeEventListener("keypress", handler)
      }
    }, [guessedLetters])
      
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