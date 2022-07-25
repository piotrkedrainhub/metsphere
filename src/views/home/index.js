import React, { useEffect } from 'react'
import '../../style/main.scss'
import favicon from '../../images/favicon.png'
import Metadata from '../../components/Metadata'
import './style/style.scss'
import LandingSection from './components/LandingSection'
import NewLifeSection from './components/NewLifeSection'
import MultifunctionalSection from './components/MultifunctionalSection'
import TechnologySection from './components/TechnologySection'
import MethouseSection from './components/MethouseSection'
import RdyForChangesSection from './components/RdyForChangesSection'
import ContactSection from './components/ContactSection'
import Footer from '../../components/Footer'
import BuildingSection from './components/BuildingSection'
import EarthSectionv2 from './components/EarthSectionv2'

const HomePage = () => {

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    document.body.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`)
  }, [])

  return (
    <>
      <Metadata
        title="METSPHERE"
        description="nowa jakość domu"
        ogImage={favicon}
      />
      <div className="main-ctn home-ctn">

        <LandingSection/>

        <NewLifeSection/>

        <MultifunctionalSection/>

        <EarthSectionv2/>

        <TechnologySection/>

        <BuildingSection/>

        <MethouseSection/>

        <RdyForChangesSection/>

        <ContactSection/>

        <Footer/>

      </div>
    </>
  )
}

export default HomePage
