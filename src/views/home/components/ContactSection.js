import React from 'react'
import '../style/rdy-for-changes-style.scss'
import { StaticImage } from 'gatsby-plugin-image'

const RdyForChangesSection = () => (
  <section
    id="contact"
    className="section-ctn rdy-for-changes-section contact-ctn"
  >

    <StaticImage
      src="../../../images/meth-theme-3.png"
      alt="Element loga METSPHERE"
      placeholder="none"
      className="meth-theme-3"
    />

    <StaticImage
      src="../../../images/meth-theme-4.png"
      alt="Element loga METSPHERE"
      placeholder="none"
      className="meth-theme-4"
    />

    <div className="content-ctn rdy-for-changes-ctn">
      <h4>KONTAKT</h4>
      <h2>Odkryj nowe możliwości <br/> życia smart.</h2>
      <p>ul. Suche Łąki 24, 31-235 Kraków</p>
      <a href="tel:+48 600 303 193">+48 600 303 193</a>
      <a href="mailto:patryk.rzasa@metsphere.pl">patryk.rzasa@metsphere.pl</a>
    </div>
  </section>
)

export default RdyForChangesSection
