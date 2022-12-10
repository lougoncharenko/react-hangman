import React from 'react'
import './HangmanDrawing.css'

const Head = (
  <div 
    style = {{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px, solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px'
    }} />
)

export const HangmanDrawing = () => {
  return (
    <section className='hangman-drawing'>
        <div className='side' />
        <div className='top'></div>
        <div className='middle'/>
        <div className='bottom' /> 
    </section>
    
  )
}