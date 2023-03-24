import React from 'react'
// import jaipur from '../../img/jaipur.jpg'
import './city.css'

const City = (props) => {
  return (
    <div className='component'>
        <div>
         <img src={props.img} alt="" className='img'/>

        </div>
        <h5 className="mx-2 my-1">{props.name}</h5>
    </div>
  )
}

export default City;