import React from 'react'
import '../style/technology-style.scss'

const TechnologySection = () => (
  <section className="section-ctn technology-section-ctn">
    <div className="content-ctn technology-ctn">
      <div className="technology-text-ctn">
        <div>
          <h4>T JAK TECHNOLOGY</h4>
          <h2>Technologia</h2>
        </div>
        <div>
          <p>Budujemy smart domy wykorzystujące najnowsze technologie zapewniając mieszkańcom METHouse oszczędności, komfort i wygodę. Wspólnie budujemy społeczność ludzi nieobojętnych, ceniących odpowiedzialność ekologiczną.</p>
        </div>
      </div>
      <div className="technology-tech-ctn">
        <div>
          <Tech title="Smart ready" text="Zarządzaj swoim domem jednym kliknięciem, także z poziomu smartfona."/>
          <Tech title="Rekuperacja i pompa ciepła" text="Ciesz się czystym, świeżym powietrzem i oszczędzaj."/>
        </div>
        <div>
          <Tech title="Soon" text="Aplikacja do zarządzania domem"/>
          <Tech title="Soon" text="Platforma łącząca mieszkańców"/>
        </div>
      </div>
    </div>
  </section>
)

const Tech = ({title, text}) => (
  <div className="tech-ctn">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

export default TechnologySection
