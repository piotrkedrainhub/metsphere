import React from 'react'
import '../style/rdy-for-changes-style.scss'
import { RiDownloadLine } from 'react-icons/ri'
import { StaticImage } from 'gatsby-plugin-image'

const RdyForChangesSection = () => (
  <section className="section-ctn rdy-for-changes-section">

    <StaticImage
      src="../../../images/meth-theme-1.png"
      alt="METHouse theme 1"
      placeholder="none"
      className="meth-theme-1"
    />

    <StaticImage
      src="../../../images/meth-theme-2.png"
      alt="METHouse theme 2"
      placeholder="none"
      className="meth-theme-2"
    />

    <div className="content-ctn rdy-for-changes-ctn">
      <h4>Broszura inwestycji</h4>
      <h2>Jesteś gotowy na zmiany?</h2>
      <p>Poznaj naszą aktualną inwestycje</p>
      <button>
        Pobierz broszurę
        <RiDownloadLine size={20}/>
      </button>
    </div>
  </section>
)

export default RdyForChangesSection
