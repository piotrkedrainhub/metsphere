import React from 'react'
import MethouseMenu from './MethouseMenu'
import '../style/methouse-presentation-ctn.scss'
import MethouseSlide, { BROWN, GREEN, GREY } from './MethouseSlide'
import { StaticImage } from 'gatsby-plugin-image'

const SLIDES = [
  {
    isFirst: true,
    tag: '#1 przemyślana architektura',
    title: 'Dom blisko natury',
    text: 'METhouse to dom otoczony zielenią. Przestrzenny ogród z tarasem i część balkonowa umożliwią Ci komfortowy wypoczynek na świeżym powietrzu. Wiemy jak ważne jest odpowiednie oświetlenie, dlatego w METSPHERE standardem są duże okna, umożliwiające promieniom słonecznym dotarcie do każdego zakamarka domu.',
    bgColor: BROWN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide1.png"
        alt="Dom z zielonym tarasem"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#2 udogodnienia',
    title: 'Dom zeroemisyjny',
    text: 'METhouse wyposażony jest w ogrzewanie podłogowe. Zastosowanie nowoczesnych pomp ciepła i systemów rekuperacji pozwala zrezygnować z gazu ziemnego i sprawia, że nasze domy są przystosowane do bezemisyjności już od momentu zakupu.',
    bgColor: BROWN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide2.png"
        alt="Przestronny, nowoczesny salon"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#1 zielona działka i dom',
    title: 'Zielone osiedle',
    text: 'Bliskie sąsiedztwo zieleni wspomaga relaks, ale ułatwia też skupienie. Osiedla METSPEHRE są pokryte zielenią, którą znajdziesz nawet na dachu! Nie godzimy się na betonozę. Wierzymy że mieszkanie w centrum miasta może być również mieszkaniem w centrum zieleni.',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide3.png"
        alt="Zielone osiedle domów jednorodzinnych"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#2 Eko dach',
    title: 'Dbałość o szczegół',
    text: 'Jesteśmy uparci i gotowi zerwać ze schematami. W METhouse zaimplementowaliśmy innowacyjne rozwiązanie skośnego, zielonego dachu ekstensywnego. Korzystamy z łatwej w utrzymaniu i obsłudze technologi.',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide4.png"
        alt="Ekologiczny dom z dachem porośniętym mchem"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#3 Naturalne materiały',
    title: 'Materiały najwyższej jakości',
    text: 'Zastosowanie naturalnych materiałów pozwala nam budować w zgodzie z naturą. Elewacja z naturalnych materiałów – drewna i paneli kwarcowych, dojścia do budynków z ekologicznej geokraty. METhouse będzie Ci służył przez wiele lat, nie szkodząc przy tym naszej planecie.',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide5.png"
        alt="Garaż w domu jednorodzinnym"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#4 eko urządzenia',
    title: 'Rekuperacja i pompa ciepła',
    text: 'Zastosowanie w METhouse najnowszych technologii grzewczych pozwala zrezygnować z potrzeby korzystania z paliw kopalnych. Budujemy domy zeroemisyjne, gotowe na przyszłość i dostępne już dziś.',
    bgColor: GREEN,
    img: (
      <StaticImage
        src="../../../images/methouse/slide6.png"
        alt="Dom jednorodzinny z garażem i tarasem na piętrze"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#1 smart ready',
    title: 'Smart dom',
    text: 'METhouse jest domem gotowym na przyszłość. Solidne, naturalne materiały sprawią, że będzie służył przez lata. Zielona energia zapewnia oszczędności i jest przyjazna środowisku. Najnowsze technologie w zakresie zdalnego zarządzania domem zwiększają komfort mieszkania.',
    bgColor: GREY,
    img: (
      <StaticImage
        src="../../../images/methouse/slide7.png"
        alt="Domy bliźniaki z garażem i piętrowym tarasem"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#2 Fotowoltaika',
    title: 'Tania, przyjazna energia',
    text: 'Jak oszczędzać energię? METSPHERE buduje zeroemisyjne domy z ogrzewaniem podłogowym. Energię elektryczną pozyskasz z paneli fotowoltaicznych, które łatwo zamontujesz na przystosowanym do tego dachu. Nowe technologie pozwalają Ci pozostać w zgodzie z naturalnym środowiskiem i zaoszczędzić do tego na rachunkach.',
    bgColor: GREY,
    img: (
      <StaticImage
        src="../../../images/methouse/slide8.png"
        alt="Nowoczesny dom jednorodzinny"
        placeholder="none"
        loading="eager"
      />
    )
  },
  {
    isFirst: false,
    tag: '#3 Ładowarka do aut elektrycznych',
    title: 'Ładowanie samochodu',
    text: 'Nie szukaj ładowarek w mieście. METhouse to dom zaawansowany technologicznie, w standardzie zapewniający mieszkańcom dostęp do ładowarek dla samochodów elektrycznych. Oszczędzasz paliwo, oszczędzaj też czas!',
    bgColor: GREY,
    img: (
      <StaticImage
        src="../../../images/methouse/slide9.png"
        alt="Parkowanie samochodu w garażu domu jednorodzinnego"
        placeholder="none"
        loading="eager"
      />
    )
  },
]

const MethousePresentation = () => (
  <div className="methouse-presentation-ctn" id="presentation">

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
