import React from 'react'
import '../style/landing-style.scss'
import {CgChevronDoubleDown} from 'react-icons/cg'
import Menu from '../../../components/Menu'
import scrollTo from 'gatsby-plugin-smoothscroll'

const LandingSection = () => (
  <section className="section-ctn landing-ctn">
    <Menu/>
    <div className="content-ctn landing-text-ctn">
      <h1>METSPHERE - <br/> nowa jakość domu</h1>
      <p>Budujemy METhouse, smart domy na osiedlach przyjaznych dla środowiska <br/> w spokojnej, dobrze skomunikowanej okolicy.</p>
      <button onClick={() => scrollTo('#newLifeSection')} className="scroll-down-ctn">
        <a>Przewiń, aby<br/>zobaczyć więcej</a>
        <CgChevronDoubleDown size={28}/>
      </button>
    </div>
  </section>
)

export default LandingSection
