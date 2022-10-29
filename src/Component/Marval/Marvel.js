import React from 'react'
import './Marvel.css'
import thorr from './thorr.jpg'
import whatif from './whatif.jpg'
import mon from './mon.jpg'
import iron from './iron.jpg'
import blk from './blk.jpg'

function Marvel() {
  return (
    <div>
      <h1 className='mar'>Marvel</h1>
      <div className='marv'>

      <img className='Img4' src={blk} alt="Image Not found" /> 
      <img className='Img4' src={mon} alt="Image Not found" />
      <img className='Img4' src={whatif} alt="Image Not found" />
      <img className='Img4' src={thorr} alt="Image Not found" />
      <img className='Img4' src={iron} alt="Image Not found" />

      
      

      </div>
    </div>
  )
}

export default Marvel