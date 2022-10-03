import React from 'react'
import '../style/landing-section-style.scss'
import Menu from '../../../components/Menu'
import { CgChevronDoubleDown } from 'react-icons/cg'
import { StaticImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

const LandingSection = () => (
  <div className="section-ctn methouse-landing-ctn" id="begin">
    <Menu/>
    <div className="content-ctn">
      <div className="methouse-text-ctn">
        <h1>METhouse</h1>
        <h3>Nowoczesny, wygodny dom dostosowany do Twoich potrzeb. Zamieszkaj w nieruchomości Twoich marzeń! </h3>
        <button onClick={() => scrollTo('#presentation')} className="scroll-down-ctn">
          <a>Przewiń, aby zobaczyć więcej</a>
          <CgChevronDoubleDown size={28}/>
        </button>
      </div>
    </div>
    <div className="methouse-img-ctn">
      <StaticImage
        src="../../../images/methouse/rzepichy-landing.png"
        alt="Dom blisko natury"
        placeholder="none"
        loading="eager"
      />
    </div>
  </div>
)

export default LandingSection
