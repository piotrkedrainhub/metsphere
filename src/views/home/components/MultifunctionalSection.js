import React from 'react'
import '../style/multifunctional-style.scss'
import Slider from './Slider'
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
            <p>Nowoczesne osiedle musi oferować więcej. Tworząc METSPHERE, nie zapomnieliśmy o niczym, co ważne dla współczesnej rodziny. Budowane przez nas domy jednorodzinne w Krakowie to przestrzeń przyjazna dzieciom, z bliskim dostępem do ośrodków edukacji i miejsc wypoczynku oraz dobra komunikacja z centrum biznesowym. Zamieszkaj w mieście, ale z dala od zgiełku, hałasu i pośpiechu.</p>
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
    description: "Szkoła blisko domu to bezpieczeństwo dzieci oraz wygoda dla rodziców, dlatego nasze osiedla powstają niedaleko szkoły podstawowej.",
    cords: {
      lat: 50.0358607,
      lng: 19.8890909
    },
    icon: (
      <StaticImage
        src="../../../images/school-building.svg"
        alt="Dom jednorodzinny blisko szkoły"
        placeholder="none"
        className="facility-icon"
      />
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8253.615990978316!2d19.889197727956386!3d50.03591938943193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabd91ea2c7195cc2!2sSzko%C5%82a%20Podstawowa%20nr%2062%20im.%20kmdr.%20por.%20F.%20D%C4%85browskiego!5e0!3m2!1spl!2sde!4v1659436933713!5m2!1spl!2sde&iwloc=near"
        height="300"
        loading="lazy"
        style={{
          width: '100%',
          height: '300px',
          borderRadius: '8px',
          border: 0
        }}
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    )
  },
  {
    distance: "7 km",
    title: "Międzynarodowy Port Lotniczy Balice",
    description: "Powstające osiedle na Woli Justowskiej w Krakowie znajduje się w bliskim sąsiedztwie lotniska, ułatwiając planowanie międzynarodowych podróży.",
    cords: {
      lat: 50.0773057,
      lng: 19.7864722
    },
    icon: (
      <StaticImage
        src="../../../images/plane-trip-international.svg"
        alt="Dom jednorodzinny blisko lotniska"
        placeholder="none"
        className="facility-icon"
      />
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10241.988741575793!2d19.7881188!3d50.0769776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x93efc553923da128!2sKrak%C3%B3w%20Airport%20im.%20Jana%20Paw%C5%82a%20II!5e0!3m2!1spl!2sde!4v1659438995307!5m2!1spl!2sde"
        height="300"
        loading="lazy"
        style={{
          width: '100%',
          height: '300px',
          borderRadius: '8px',
          border: 0
        }}
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    )
  },
  {
    distance: "7 km",
    title: "Zalew Kryspinów",
    description: "Wypoczynek jest ważny. Powstająca w Krakowie inwestycja METSPHERE to osiedle blisko wody, umożliwiające częsty relaks nad Zalewem Kryspinów.",
    cords: {
      lat: 50.0504925,
      lng: 19.7972143
    },
    icon: (
      <StaticImage
        src="../../../images/kryspinow.svg"
        alt="Dom jednorodzinny blisko wody"
        placeholder="none"
        className="facility-icon"
      />
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5123.816809200456!2d19.791137179870596!3d50.05054712668947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcae2cb6f40ef0db5!2sZalew%20Kryspin%C3%B3w!5e0!3m2!1sen!2sus!4v1659439084857!5m2!1sen!2sus"
        height="300"
        loading="lazy"
        style={{
          width: '100%',
          height: '300px',
          borderRadius: '8px',
          border: 0
        }}
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    )
  },
  {
    distance: "7 km",
    title: "Rynek starego Miasta",
    description: "Bliskość Starego Miasta to wygodne i bezpieczne powroty do domu. METhouse zapewnia Ci dostęp do miasta przy zachowaniu przedmiejskiej ciszy i spokoju.",
    cords: {
      lat: 50.0612236,
      lng: 19.9365583
    },
    icon: (
      <StaticImage
        src="../../../images/rynek.svg"
        alt="Dom jednorodzinny blisko centrum Krakowa"
        placeholder="none"
        className="facility-icon"
      />
    ),
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.313085338065!2d19.9373515!3d50.06169799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0df90f6453%3A0xbb2e110fa28d685b!2zUnluZWsgR8WCw7N3bnksIEtyYWvDs3csIFBvbHNrYQ!5e0!3m2!1spl!2sde!4v1659439172395!5m2!1spl!2sde"
        height="300"
        loading="lazy"
        style={{
          width: '100%',
          height: '300px',
          borderRadius: '8px',
          border: 0
        }}
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
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
      {item.iframe}
    </div>
  )
}

export default MultifunctionalSection
