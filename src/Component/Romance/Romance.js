import React from 'react'
import './Romance.css'
import  clos from './clos.jpg'
import book from './book.jpg'
import twil from './twil.jpg'
import note from './note.jpg'
import bef from'./bef.jpg'


function Romance() {
  return (
    <div>
        <h1 className='roman'>Romance</h1>
        <div className='rom'>

        <img className='Img3' src={clos} alt="Image Not found" />
        <img className='Img3' src={book} alt="Image Not  found"/>
        <img className='Img3' src={twil} alt="Image Not found"/>
        <img className='Img3' src={note} alt="Image not found"/>
        <img className='Img3' src={bef} alt="Image not found"/>
        </div>
    </div>
  )
}

export default Romance