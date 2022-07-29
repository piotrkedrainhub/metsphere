import React from 'react'
import MethouseMenu from './MethouseMenu'
import '../style/methouse-presentation-ctn.scss'
import MethouseSlide, { BROWN, GREEN, GREY } from './MethouseSlide'
import { StaticImage } from 'gatsby-plugin-image'

const SLIDES = [
  {
    isFirst: true,
    tag: '#1 przemyślana architektura',
    title: 'Blisko natury i wygodnie',
    text: 'Każdy dom posiada duże okna na obu kondygnacjach doskonale doświetlające pomieszczenia. Z tarasu możesz wyjśc na przestrzenny ogórd. Smieaicmi się nie martw, każdy posiada zabudowane śmietniki na granicy domnów.',
    bgColor: BROWN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide1.png"
        alt="Blisko natury i wygodnie obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#2 udogodnienia',
    title: 'Dom zeroemisyjny? Jesteśmy na tak!',
    text: 'Nasze domy ogrzewane są ogrzewaniem podłgoowym. Dodatkowo już od momentu zakupu dom jest przygotowany pod bycie zeroemicyjnym.',
    bgColor: BROWN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide2.png"
        alt="Dom zeroemisyjny? Jesteśmy na tak! obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#1 zielona działka i dom',
    title: 'Zielono mi wszędzie, nawet na dachu',
    text: 'Działki są w 70% pokryte zielenią, znajdziesz ją nawet na dachu! Droga do każdego z domków jest pokryta zieloną trawą i innymi roślinami, dzięki temu będziesz się czuć jak w domku w lesie, ale będzie to nadal centrum Krakowa. Zieleń znajdziesz na dachu, na dfrodze, zielony stropodach nad garażami i zielony balkon. ',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide3.png"
        alt="Zielono mi wszędzie, nawet na dachu obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#2 Eko dach',
    title: 'Dbamy o każdy szczegół',
    text: 'Dlatego zdecydowaliśmy się umieścić zieleń nawet na dachu. Dodatkowo zaimplementowaliśmy innowacyjne rozwiązanie skośnego zielonego dachu ekstensywnego.  ',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide4.png"
        alt="Dbamy o każdy szczegół obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#3 Naturalne materiały',
    title: 'Materiały najwyższej jakości',
    text: 'Elewacja z naturalnych materiałów – drewno i panele kwarcowe, dojścia do budynków z ekologicznej geokraty. Wszystko będzie CXi służyć prez wiele lat, a planeta na tym nie ucierpi. ',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide5.png"
        alt="Materiały najwyższej jakości obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#4 eko urządzenia',
    title: 'Rekuperacja i pompa ciepła',
    text: 'Elewacja z naturalnych materiałów – drewno i panele kwarcowe. Wszystko będzie CXi służyć prez wiele lat, a planeta na tym nie ucierpi. ',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide6.png"
        alt="Rekuperacja i pompa ciepła obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#1 smart ready',
    title: 'Dom przygotowany pod bycie smart',
    text: 'Nasze domy ogrzewane są ogrzewaniem podłgoowym. Dodatkowo już od momentu zakupu dom jest przygotowany pod bycie zeroemicyjnym.',
    bgColor: GREY,
    img: (
      <StaticImage
        src="../../../images/methouse/slide7.png"
        alt="Dom przygotowany pod bycie smart obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#2 Fotowoltaika',
    title: 'Produkuj prąd taniej i przyjaźniej',
    text: 'Nasze domy ogrzewane są ogrzewaniem podłgoowym. Dodatkowo już od momentu zakupu dom jest przygotowany pod bycie zeroemicyjnym.',
    bgColor: GREY,
    img: (
      <StaticImage
        src="../../../images/methouse/slide8.png"
        alt="Produkuj prąd taniej i przyjaźniej obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#3 Ładowarka do aut elektrycznych',
    title: 'Ładuj swoje auto pod domem',
    text: 'Nasze domy ogrzewane są ogrzewaniem podłgoowym. Dodatkowo już od momentu zakupu dom jest przygotowany pod bycie zeroemicyjnym.',
    bgColor: GREY,
    img: (
      <StaticImage
        src="../../../images/methouse/slide9.png"
        alt="Ładuj swoje auto pod domem obrazek"
        placeholder="none"
        loading="eager"
      />
    )
  },
]

const MethousePresentation = () => (
  <div className="methouse-presentation-ctn">

    <div id="multi"/>
    <MethouseMenu/>

    {
      SLIDES.slice(0, 2).map(slide => (
        <MethouseSlide
          isFirst={slide.isFirst}
          tag={slide.tag}
          title={slide.title}
          text={slide.text}
          bgColor={slide.bgColor}
          img={slide.img}
        />
      ))
    }

    <div id="earth"/>
    {
      SLIDES.slice(2, 6).map(slide => (
        <MethouseSlide
          isFirst={slide.isFirst}
          tag={slide.tag}
          title={slide.title}
          text={slide.text}
          bgColor={slide.bgColor}
          img={slide.img}
        />
      ))
    }

    <div id="tech"/>
    {
      SLIDES.slice(6, 9).map(slide => (
        <MethouseSlide
          isFirst={slide.isFirst}
          tag={slide.tag}
          title={slide.title}
          text={slide.text}
          bgColor={slide.bgColor}
          img={slide.img}
        />
      ))
    }

  </div>
)

export default MethousePresentation
