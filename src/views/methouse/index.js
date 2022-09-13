import React from 'react'
import Metadata from '../../components/Metadata'
import favicon from '../../images/favicon.png'
import LandingSection from './components/LandingSection'
import MethousePresentation from './components/MethousePresentation'
import RdyForChangesSection from '../home/components/RdyForChangesSection'
import ContactSection from '../home/components/ContactSection'
import Footer from '../../components/Footer'
import ScrollFloatBtn from './components/scroll-float-btn'

const METhousePage = () => {
  return (
    <>
      <Metadata
        title="METhouse"
        description="nowa jakość domu"
        ogImage={favicon}
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
