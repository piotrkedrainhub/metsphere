import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './menu-style.scss'
import { Link } from 'gatsby-plugin-react-i18next'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Menu = () => (
  <div className="content-ctn menu-ctn">
    <Link to="/">
      <StaticImage
        src="../images/logo.png"
        alt="Logo METSPHERE"
        placeholder="tracedSVG"
        loading="eager"
        className="logo"
      />
    </Link>
    <div className="menu-link-ctn">
      <Link to="/methouse">METhouse</Link>
      <a target="_blank" rel="nofollow" href="https://www.otodom.pl/">Oferta</a>
      <button onClick={() => scrollTo('#contact')}>Kontakt</button>
    </div>
  </div>
)

export default Menu
