import React from 'react'
import jok from './jok.jpg'
import oph from './oph.jpg'
import saw from './saw.jpg'
import split from './split.jpg'
import pris from './pris.jpg'
import './Poster.css'

function Poster() {
  return (
    <div className='PostMainDiv'>
        <h1>Thriller</h1>
        <div>
        <img className='Img1' src={pris} alt="Image Not found" />
        <img className='Img1' src={jok} alt="Image Not found" />
        <img className='Img1' src={saw} alt="Image Not found" />
        <img className='Img1' src={oph} alt="Image Not found" />
        <img className='Img1' src={split} alt="Image Not found" />
        </div>
      
    </div>
  )
}

export default Poster