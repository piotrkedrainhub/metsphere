import React from 'react'
import '../style/landing-section-style.scss'
import Menu from '../../../components/Menu'
import { CgChevronDoubleDown } from 'react-icons/cg'
import { StaticImage } from 'gatsby-plugin-image'

const LandingSection = () => (
  <div className="section-ctn methouse-landing-ctn">
    <Menu/>
    <div className="content-ctn">
      <div className="methouse-text-ctn">
        <h1>METhouse</h1>
        <h3>Dom Twoich marzeń - wygodny, najnowocześniejszy, przystodowany do Twoich potrzeb. W jednym słowie ideał. </h3>
        <div className="scroll-down-ctn">
          <a>Scroll to explore</a>
          <CgChevronDoubleDown size={28}/>
        </div>
      </div>
    </div>
    <div className="methouse-img-ctn">
      <StaticImage
        src="../../../images/methouse/rzepichy-landing.png"
        alt="Rzepichy dom landing"
        placeholder="none"
        loading="eager"
      />
    </div>
  </div>
)

export default LandingSection
