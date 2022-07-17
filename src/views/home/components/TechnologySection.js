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
          <p>Atrakcyjna nieruchomość na Woli Justowskiej w Krakowie, położona w malowniczej okolicy, w sąsiedztwie Lasu Wolskiego. Piękna, spokojna i zielona dzielnica willowa miasta Krakowa,odizolowana od zgiełku miasta. Prestiżowa lokalizacja.</p>
        </div>
      </div>
      <div className="technology-tech-ctn">
        <div>
          <Tech title="Smart ready" text="Bądź gotowy do zarządzania swoim domem jednym kliknięciem."/>
          <Tech title="Rekuperacja i pompa ciepła" text="Korzystaj z wentylacji mechanicznej i ciesz się czystym powietrzem."/>
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
