import React from 'react'
import './New.css'
import ali from './ali.jpg'
import et from './et.jpg'
import robo from './robo.jpg'
import tron from './tron.jpg'
import obl from './obl.jpg'


function New() {
  return (
    <div>
        <h1 className='newname'>Sci-Fi</h1>
        <div className='sf'>
        <img className='Img5' src={ali} alt="Image Not found" />
        <img className='Img5' src={et} alt="Image Not found" />
        <img className='Img5' src={robo} alt="Image Not found" />
        <img className='Img5' src={tron} alt="Image Not found" />
        <img className='Img5' src={obl} alt="Image Not found" />
        


      </div>
    </div>
  )
}

export default New