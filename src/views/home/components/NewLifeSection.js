import React from 'react'
import '../style/new-life-style.scss'
import { StaticImage } from 'gatsby-plugin-image'

const NewLifeSection = () => (
  <section className="section-ctn new-life-ctn" id="newLifeSection">
    <div className="content-ctn">
      <div className="new-life-text-ctn">
        <div>
          <h2>Lepsze mieszkanie to lepszy świat</h2>
        </div>
        <div>
          <p>Sprzeciwiamy się betonozie. METHouse to ekologiczne, inteligentne domy, dzięki którym możesz korzystać z osiągnięć najnowszych technologii, nie pozostając obojętnym wobec środowiska. Dołącz do METSPHERE i buduj z nami lepszy świat. Stwórz z nami społeczność, która zapoczątkuje styl odpowiedzialnego i nowoczesnego mieszkania. Poznaj nasze wartości.</p>
        </div>
      </div>
    </div>

    <div className="new-life-icon-ctn">
      <div className="new-life-icon multi-icon">
        <div className="new-life-icon-inner-ctn">
          <h3>Wielofunkcyjność</h3>
          <StaticImage
            src="../../../images/multifunctional.svg"
            alt="Wielofunkcyjność"
            placeholder="none"
          />
        </div>
      </div>
      <div className="new-life-icon earth-icon">
        <div className="new-life-icon-inner-ctn">
          <h3>Ziemia</h3>
          <StaticImage
            src="../../../images/tree-two.svg"
            alt="Ziemia"
            placeholder="none"
          />
        </div>
      </div>
      <div className="new-life-icon tech-icon">
        <div className="new-life-icon-inner-ctn">
          <h3>Technologia</h3>
          <StaticImage
            src="../../../images/smart-house-phone-sync.svg"
            alt="Technologia"
            placeholder="none"
          />
        </div>
      </div>
      <div className="new-life-icon sfera-icon">
          <div className="new-life-icon-inner-ctn">
            <h3>Sfera</h3>
            <StaticImage
              src="../../../images/family-home-1.svg"
              alt="Sfera"
              placeholder="none"
            />
          </div>
        </div>
    </div>

  </section>
)

export default NewLifeSection
