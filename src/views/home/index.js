import React, { useEffect } from 'react'
import '../../style/main.scss'
import SEO_IMAGE from '../../images/seo_metsphere.png'
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
import CookieBar from '../../components/CookieBar'
import StickyMenu from '../../components/sticky-menu'

const HomePage = () => {

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    document.body.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`)
  }, [])

  return (
    <>
      <Metadata
        title="Nowoczesne osiedla domów jednorodzinnych | METSPHERE"
        description="METSPHERE to deweloper budujący zgodnie z naturą i najnowszymi trendami technologicznymi. Inwestycje METSHPERE to m. in. zielone osiedle domów jednorodzinnych w Krakowie"
        ogImage={SEO_IMAGE}
      />
      <div className="main-ctn home-ctn">
        <StickyMenu/>

        <CookieBar/>

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
