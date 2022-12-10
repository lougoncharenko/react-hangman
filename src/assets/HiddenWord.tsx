import React from 'react';
import './HiddenWord.css'

interface Props {
  guessedLetters: Array<string>,
  word: string
}

const HiddenWord = ({guessedLetters, word}: Props) => {
    // const word = 'test'
    // const guessedLetters = 't'
  return (
    <div className='hidden-word-container'> 
      {word.split('').map((letter, index) => (
         <span className='hidden-letters' key={index}>
             <span 
             style = {{
                 visibility: guessedLetters.includes(letter)
                 ? "visible"
                 : 'hidden'
             }}
             >
                {letter}  
             </span>
            
             </span> 
  ))}
    </div>
  );
}

export default HiddenWord;
