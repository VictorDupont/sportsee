import React from 'react'
import './style.scss'

import logo from './logo.svg'

const Header = () => {
  return (
    <nav className="navbar">
    <div className="navbar__logo">
      <img src={logo} alt="Logo" className="navbar__logo__img" />
    </div>
    <ul className="navbar__links">
      <li className="navbar__links__li"><a href="/#" className="navbar__links__li__a">Accueil</a></li>
      <li className="navbar__links__li"><a href="/#" className="navbar__links__li__a">Profil</a></li>
      <li className="navbar__links__li"><a href="/#" className="navbar__links__li__a">Réglage</a></li>
      <li className="navbar__links__li"><a href="/#" className="navbar__links__li__a">Communauté</a></li>
    </ul>
  </nav>
  )
}

export default Header