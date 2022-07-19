import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './menu-style.scss'
import { Link } from 'gatsby-plugin-react-i18next'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Menu = () => (
  <div className="content-ctn menu-ctn">
    <StaticImage
      src="../images/logo.png"
      alt="METSHPHERE logo icon"
      placeholder="none"
    />
    <div className="menu-link-ctn">
      <Link to="/">O nas</Link>
      <button>METHouse</button>
      <button onClick={() => scrollTo('#contact')}>Kontakt</button>
    </div>
  </div>
)

export default Menu
