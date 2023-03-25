import React from 'react'
// import jaipur from '../../img/jaipur.jpg'
import './city.css'

const City = (props) => {
  return (
    <div className='component'>
        <div>
         <img src={props.img} alt="" className='img'/>
        </div>
        <h5 className='imgs'>{props.name}</h5>
    </div>
  )
}

export default City;