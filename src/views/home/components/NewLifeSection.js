import React from 'react'
import '../style/new-life-style.scss'
import { StaticImage } from 'gatsby-plugin-image'

const NewLifeSection = () => (
  <section className="section-ctn new-life-ctn">
    <div className="content-ctn">
      <div className="new-life-text-ctn">
        <div>
          <h2>Poznaj nowy sposób życia</h2>
        </div>
        <div>
          <p>Dołącz do METSPHERE i buduj z nami lepszy świat. Tworzymy coś więcej niż budynki. Nadajemy im duszę. Przeciwstawiamy się bezmyślnemu zalewaniu miast betonem. Zbudujemy społeczność, której każdy jest ważną częścią. Na rynku nieruchomości w centrum stawiamy człowieka.</p>
        </div>
      </div>
    </div>

    <div className="new-life-icon-ctn">
      <div className="new-life-icon multi-icon">
        <div className="new-life-icon-inner-ctn">
          <h3>Wielofunkcyjność</h3>
          <StaticImage
            src="../../../images/multifunctional.svg"
            alt="Multifunctional icon"
            placeholder="none"
          />
        </div>
      </div>
      <div className="new-life-icon earth-icon">
        <div className="new-life-icon-inner-ctn">
          <h3>Ziemia</h3>
          <StaticImage
            src="../../../images/tree-two.svg"
            alt="Tree icon"
            placeholder="none"
          />
        </div>
      </div>
      <div className="new-life-icon tech-icon">
        <div className="new-life-icon-inner-ctn">
          <h3>Technologia</h3>
          <StaticImage
            src="../../../images/smart-house-phone-sync.svg"
            alt="Smart house phone sync icon"
            placeholder="none"
          />
        </div>
      </div>
      <div className="new-life-icon sfera-icon">
          <div className="new-life-icon-inner-ctn">
            <h3>Sfera</h3>
            <StaticImage
              src="../../../images/family-home-1.svg"
              alt="Family home icon"
              placeholder="none"
            />
          </div>
        </div>
    </div>

  </section>
)

export default NewLifeSection
