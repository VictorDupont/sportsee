import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './style.scss'

import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bike from '../../assets/bike.svg'
import gym from '../../assets/gym.svg'

const Footer = () => {
  return (
    <footer>
  <div className="footer-content">
    <p>Copyright, SportSee 2020</p>
    <div className="icon-container">
        <img src={yoga} alt="yoga" />
      </div>
      <div className="icon-container">
      <img src={swim} alt="swim" />
      </div>
      <div className="icon-container">
      <img src={bike} alt="bike" />
      </div>
      <div className="icon-container">
      <img src={gym} alt="gym" />
      </div>
  </div>
</footer>
  )
}

export default Footer