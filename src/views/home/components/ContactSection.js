import React from 'react'
import '../style/rdy-for-changes-style.scss'
import { StaticImage } from 'gatsby-plugin-image'

const RdyForChangesSection = () => (
  <section className="section-ctn rdy-for-changes-section contact-ctn">

    <StaticImage
      src="../../../images/meth-theme-3.png"
      alt="METHouse theme 3"
      placeholder="none"
      className="meth-theme-3"
    />

    <StaticImage
      src="../../../images/meth-theme-4.png"
      alt="METHouse theme 4"
      placeholder="none"
      className="meth-theme-4"
    />

    <div className="content-ctn rdy-for-changes-ctn">
      <h4>KONTAKT</h4>
      <h2>Odkryj nowe możliwości <br/> życia smart.</h2>
      <p>ul. Migdałowa 34/4, Kraków <br/>
        +48 888 398 388 <br/>
        kontakt@metsphere.com</p>
    </div>
  </section>
)

export default RdyForChangesSection
