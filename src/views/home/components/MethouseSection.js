import React from 'react'
import '../style/methouse-style.scss'
import { TbArrowRight } from 'react-icons/tb'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby-plugin-react-i18next'

const MethouseSection = () => (
  <section className="section-ctn methouse-section">
    <div className="content-ctn">
      <div className="methouse-ctn">
        <div className="methouse-text-ctn">
          <h2>METHouse</h2>
          <p>Wielofunkcyjność. <br/> Ekologia. <br/> Technologia. <br/> Wszystko, czego potrzebujesz.</p>
          <Link to="/methouse">
            Dowiedz się więcej
            <TbArrowRight size={24}/>
          </Link>
        </div>
        <div className="methouse-img-ctn">
          <div className="methouse-img-ctn1">
            <StaticImage
              src="../../../images/methouse-placeholder-1.png"
              alt="Ogródek przy nowoczesnym domu jednorodzinnym"
              placeholder="none"
            />
            <StaticImage
              src="../../../images/methouse-placeholder-2.png"
              alt="Elegancki ogród przed domem"
              placeholder="none"
            />
          </div>
          <div className="methouse-img-ctn2">
            <StaticImage
              src="../../../images/methouse-placeholder-3.png"
              alt="Nowoczesny dom z dużymi oknami"
              placeholder="none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default MethouseSection
