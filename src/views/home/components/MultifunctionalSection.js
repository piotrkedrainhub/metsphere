import React from 'react'
import '../style/multifunctional-style.scss'
import Slider from './Slider'
import Map from './Map'
import { StaticImage } from 'gatsby-plugin-image'

const MultifunctionalSection = () => (
  <section className="section-ctn multifunctional-ctn">
    <div className="multi-helper">
      <div className="content-ctn ">
        <div className="multi-inner-ctn">
          <div className="multi-slider-ctn">
            <FacilitiesSlider/>
          </div>
          <div className="multi-text-ctn">
            <h4>M JAK MIXED-USED</h4>
            <h2>Wielofunkcyjność</h2>
            <p>Atrakcyjna nieruchomość na Woli Justowskiej w Krakowie, położona w malowniczej okolicy, w sąsiedztwie Lasu Wolskiego. Piękna, spokojna i zielona dzielnica willowa miasta Krakowa,odizolowana od zgiełku miasta. Prestiżowa lokalizacja.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const FACILITIES = [
  {
    distance: "7 km",
    title: "Szkoła podstawowa",
    description: "Większość naszych osiedli budujemy tak, aby szkoła podstawowa była w zasięgu maksymalnie 7 km.",
    cords: {
      lat: 50.0358607,
      lng: 19.8890909
    },
    icon: (
      <StaticImage
        src="../../../images/school-building.svg"
        alt="Ikona szkoły"
        placeholder="none"
        className="facility-icon"
      />
    )
  },
  {
    distance: "7 km",
    title: "Międzynarodowy Port Lotniczy Balice",
    description: "Większość naszych osiedli budujemy tak, aby szkoła podstawowa była w zasięgu maksymalnie 7 km.",
    cords: {
      lat: 50.0773057,
      lng: 19.7864722
    },
    icon: (
      <StaticImage
        src="../../../images/plane-trip-international.svg"
        alt="Ikona lotniska - Balice"
        placeholder="none"
        className="facility-icon"
      />
    )
  },
  {
    distance: "7 km",
    title: "Zalew Kryspinów",
    description: "Większość naszych osiedli budujemy tak, aby szkoła podstawowa była w zasięgu maksymalnie 7 km.",
    cords: {
      lat: 50.0504925,
      lng: 19.7972143
    },
    icon: (
      <StaticImage
        src="../../../images/kryspinow.svg"
        alt="Ikona Zalew Kryspinów"
        placeholder="none"
        className="facility-icon"
      />
    )
  },
  {
    distance: "7 km",
    title: "Rynek starego Miasta",
    description: "Większość naszych osiedli budujemy tak, aby szkoła podstawowa była w zasięgu maksymalnie 7 km.",
    cords: {
      lat: 50.0612236,
      lng: 19.9365583
    },
    icon: (
      <StaticImage
        src="../../../images/rynek.svg"
        alt="Ikona Rynku Starego Miasta"
        placeholder="none"
        className="facility-icon"
      />
    )
  }
]

const FacilitiesSlider = () => {
  return (
    <Slider>
      {
        FACILITIES.map(item => <Slide key={item.name} item={item}/>)
      }
    </Slider>
  )
}

const Slide = ({item}) => {
  return (
    <div className="multi-slide" key={item.name}>
      <div className="icon-ctn">
        {item.icon}
        <div className="icon-text-ctn">
          <h3>{item.distance}</h3>
          <h3>{item.title}</h3>
        </div>
      </div>
      <p>{item.description}</p>
      <Map cords={item.cords}/>
    </div>
  )
}

export default MultifunctionalSection
