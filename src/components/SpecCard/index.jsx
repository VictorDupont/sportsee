import React from 'react'
import './style.scss'

import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import chicken from '../../assets/chicken.svg'
import energy from '../../assets/energy.svg'

const SpecCard = ({icon, title, value, unit}) => {
  let iconURL = icon === "apple" ? apple : icon === "cheeseburger" ? cheeseburger : icon === "chicken" ? chicken : icon === "energy" ? energy : null;
  let iconBackgroundColor = icon === "apple" ? "rgba(249,206,35,0.1)" : icon === "cheeseburger" ? "rgba(253, 81, 129, 0.1)" : icon === "chicken" ? "rgba(74, 184, 255, 0.1)" : icon === "energy" ? "rgba(255,0,0,0.1)" : null;
  return (
    <div className="containerCard">
        <div className="icon" style={{backgroundColor: iconBackgroundColor}}><img src={iconURL} alt={title} /></div>
        <div className="containerValue">
          <div className="value">{value}{unit}</div>
          <div className="title">{title}</div>
        </div>
    </div>
  )
}

export default SpecCard