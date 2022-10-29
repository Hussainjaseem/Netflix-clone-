import React from 'react'
import './Fantasy.css'

import bbb from './bbb.jpg'
import fantastic from './fantastic.jpg'
import bfgg from './bfgg.jpg'
import fan from './fan.jpg'
import dark from './dark.jpg'


function Fantasy() {
  return (
    <div>
        <h1 className='fant'>Fantasy</h1>
        <div className='fantas'>
        
        <img className='Img2' src={bbb} alt="Image Not found" />
        <img className='Img2' src={fantastic} alt="Image Not found" />
        <img className='Img2' src={bfgg} alt="Image Not found" />
        <img className='Img2' src={fan} alt="Image Not found" />
        <img className='Img2' src={dark} alt="Image Not found" />
 
        </div>
    </div>
  )
}

export default Fantasy