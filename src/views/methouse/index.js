import React from 'react'
import Metadata from '../../components/Metadata'
import LandingSection from './components/LandingSection'
import MethousePresentation from './components/MethousePresentation'
import RdyForChangesSection from '../home/components/RdyForChangesSection'
import ContactSection from '../home/components/ContactSection'
import Footer from '../../components/Footer'
import ScrollFloatBtn from './components/scroll-float-btn'
import SEO_IMAGE from '../../images/seo_metsphere.png'

const METhousePage = () => {
  return (
    <>
      <Metadata
        title="Nowoczesny dom jednorodzinny | METHouse"
        description="Zamieszkaj w mieście, ale blisko natury. Wielofunkcyjne, przyjazne środowisku i dobrze skomunikowane osiedla domów jednorodzinnych METHouse."
        ogImage={SEO_IMAGE}
      />
      <div className="main-ctn methouse-ctn">

        <ScrollFloatBtn/>

        <LandingSection/>

        <MethousePresentation/>

        <RdyForChangesSection/>

        <ContactSection/>

        <Footer/>

      </div>
    </>
  )
}

export default METhousePage
