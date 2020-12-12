import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <div className="image avatar">
        <img src={logo} alt="logo" />
      </div>
      <h1>
        <strong>Desired landscapes</strong>
      </h1>
      <h2 className="myh2">The local family business</h2>
    </div>
    <Footer />
  </header>
)

export default Header
