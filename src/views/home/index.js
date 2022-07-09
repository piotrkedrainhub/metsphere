import React, { useEffect } from 'react'
import '../../style/main.scss'
import favicon from '../../images/favicon.png'
import Metadata from '../../components/Metadata'
import './style/style.scss'
import EarthSection from './components/EarthSection'
import '../../style/slick-carousel/slick-theme.scss'
import '../../style/slick-carousel/slick.scss'


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

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>METSPHERE - <br/> nowa jakość domu</h1>
          </div>
        </section>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>Poznaj nowy sposób życia</h1>
          </div>
        </section>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>Wielofunkcyjność</h1>
          </div>
        </section>

        <EarthSection/>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>Technologia</h1>
          </div>
        </section>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>Budowanie sfery</h1>
          </div>
        </section>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>METHouse</h1>
          </div>
        </section>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>Jesteś gotowy na zmiany?</h1>
          </div>
        </section>

        <section className="section-ctn">
          <div className="content-ctn">
            <h1>Odkryj nowe możliwości <br/> życia smart.</h1>
          </div>
        </section>

      </div>
    </>
  )
}

export default HomePage
