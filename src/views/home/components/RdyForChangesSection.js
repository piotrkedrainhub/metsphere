import React from 'react'
import '../style/rdy-for-changes-style.scss'
import { RiDownloadLine } from 'react-icons/ri'
import { StaticImage } from 'gatsby-plugin-image'
import { withPrefix } from 'gatsby'

const RdyForChangesSection = () => (
  <section className="section-ctn rdy-for-changes-section">

    <StaticImage
      src="../../../images/meth-theme-1.png"
      alt="Element loga METSPHERE"
      placeholder="none"
      className="meth-theme-1"
    />

    <StaticImage
      src="../../../images/meth-theme-2.png"
      alt="Element loga METSPHERE"
      placeholder="none"
      className="meth-theme-2"
    />

    <div className="content-ctn rdy-for-changes-ctn">
      <h4>Broszura inwestycji</h4>
      <h2>Jesteś gotowy na zmiany?</h2>
      <p>Poznaj naszą aktualną inwestycje</p>
      <a target="_blank" href={withPrefix('broszura-METSPHERE.pdf')}>
        Pobierz broszurę
        <RiDownloadLine size={20}/>
      </a>
    </div>
  </section>
)

export default RdyForChangesSection
