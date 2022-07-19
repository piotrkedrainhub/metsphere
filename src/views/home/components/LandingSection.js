import React from 'react'
import '../style/landing-style.scss'
import {CgChevronDoubleDown} from 'react-icons/cg'
import Menu from '../../../components/Menu'

const LandingSection = () => (
  <section className="section-ctn landing-ctn">
    <Menu/>
    <div className="content-ctn landing-text-ctn">
      <h1>METSPHERE - <br/> nowa jakość domu</h1>
      <p>Poznaj swój nowy dom. Bardziej eko. Bardziej smart. Bardziej dostosowany <br/> do Twoich potrzeb. Bo u nas liczy się człowiek.</p>
      <div className="scroll-down-ctn">
        <a>Scroll to explore</a>
        <CgChevronDoubleDown size={28}/>
      </div>
    </div>
  </section>
)

export default LandingSection
