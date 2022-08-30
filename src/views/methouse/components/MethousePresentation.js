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
    text: 'METHouse to dom z ogrodem, na który dostaniesz się za pomocą przestrzennego tarasu. Wiemy jak ważne jest odpowiednie oświetlenie wnętrza, dlatego w METSPHERE budujemy domy z dużymi oknami, które nie tylko zapraszają do środka promienie społeczne, pozwalają również podziwiać cudowne okoliczności przyrody. Domy wyposażone są też w zabudowane śmietniki, aby utylizacja odpadów była tak wygodna, jak dyskretna.',
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
    title: 'Dom zeroemisyjny',
    text: 'METHouse wyposażony jest w ogrzewanie podłogowe. Zastosowanie nowoczesnych pomp ciepła i systemów rekuperacji pozwala zrezygnować z gazu ziemnego i sprawia, że nasze domy są przystosowane do bezemisyjności już od momentu zakupu.',
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
    title: 'Zielone osiedle',
    text: 'Bliskie sąsiedztwo zieleni wspomaga relaks, ale ułatwia też skupienie. Osiedla METSPHERE są pokryte zielenią, znajdziesz ją nawet na dachu! Nie godzimy się na betonozę, wierzymy że mieszkanie w centrum miasta może być również mieszkaniem w centrum zieleni.',
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
    title: 'Dbałość o szczegół',
    text: 'Jesteśmy uparci i gotowi zerwać ze schematami. Dlatego zdecydowaliśmy się umieścić zieleń nawet na dachu. W METHouse zaimplementowaliśmy innowacyjne rozwiązanie skośnego, zielonego dachu ekstensywnego.',
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
    text: 'Zastosowanie naturalnych materiałów pozwala nam budować w zgodzie z naturą. Elewacja z naturalnych materiałów – drewna i paneli kwarcowych, dojścia do budynków z ekologicznej geokraty. METHouse będzie Ci służył przez wiele lat, nie szkodząc przy tym naszej planecie.',
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
    text: 'Zastosowanie w METHouse najnowszych technologii grzewczych pozwala zrezygnować z potrzeby korzystania z paliw kopalnych. Budujemy domy zeroemisyjne, gotowe na przyszłość i dostępne już dziś.',
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
    title: 'Smart dom',
    text: 'METHOuse jest domem gotowym na przyszłość. Solidne, naturalne materiały sprawią, że będzie służył przez lata. Zielona energia zapewnia oszczędności i jest przyjazna środowisku. Najnowsze technologie w zakresie zdalnego zarządzania domem zwiększają komfort mieszkania.',
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
    title: 'Tania, przyjazna energia',
    text: 'Jak oszczędzać energię? METSPHERE buduje domy z ogrzewaniem podłogowym, wykorzystujące pompy ciepła i zeroemisyjne. Energię elektryczną pozyskasz z paneli fotowoltaicznych, które łatwo zamontujesz na przystosowanym do tego dachu. Nowe technologie pozwalają Ci pozostać w zgodzie ze środowiskiem naturalnym, oszczędzając do tego na rachunkach.',
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
    title: 'Ładowanie samochodu',
    text: 'Nie szukaj ładowarek w mieście. METHouse to dom zaawansowany technologicznie, w standardzie zapewniający mieszkańcom dostęp do ładowarek do samochodów z napędem elektrycznym. Oszczędzasz paliwo, oszczędzaj też czas!',
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
