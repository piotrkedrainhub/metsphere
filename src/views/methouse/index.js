import React from 'react'
import Metadata from '../../components/Metadata'
import favicon from '../../images/favicon.png'
import './style/style.scss'
import LandingSection from './components/LandingSection'

const METhousePage = () => {
  return (
    <>
      <Metadata
        title="METhouse"
        description="nowa jakość domu"
        ogImage={favicon}
      />
      <div className="main-ctn methouse-ctn">

        <LandingSection/>

        <div className="methouse-slides-ctn">
          <div className="bob"><div/></div>

          <section className="section-ctn sticyk-ctn">
            <h2>Blisko natury i wygodnie</h2>
          </section>

          <section className="section-ctn sticyk-ctn">
            <h2>Dom seroemisyjny? Jesteśmy na tak!</h2>
          </section>

          <section className="section-ctn sticyk-ctn">
            <h2>Dom seroemisyjny? Jesteśmy na tak!</h2>
          </section>

        </div>

        <section className="section-ctn">
          <h1>METhouse</h1>
        </section>

      </div>
    </>
  )
}

export default METhousePage
