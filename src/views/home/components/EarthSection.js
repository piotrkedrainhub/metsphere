import React, { useEffect, useRef } from 'react'
import '../style/earth-style.scss'
import { StaticImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

const EarthSection = () => {

  const firstDivRef = useRef()
  const secondDivRef = useRef()
  const thirdDivRef = useRef()
  const fourthDivRef = useRef()
  const lastDivRef = useRef()

  const firstInnerDivRef = useRef()
  const secondInnerDivRef = useRef()
  const thirdInnerDivRef = useRef()
  const fourthInnerDivRef = useRef()
  const lastInnerDivRef = useRef()

  const earthTextDivRef = useRef()
  const earthTextTmpDivRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const firstEarthCtnTop = firstDivRef.current?.getBoundingClientRect()?.top
      const firstEarthCtnBottom = firstDivRef.current?.getBoundingClientRect()?.bottom
      const secondEarthCtnBottom = secondDivRef.current?.getBoundingClientRect()?.bottom
      const thirdEarthCtnBottom = thirdDivRef.current?.getBoundingClientRect()?.bottom
      const fourthEarthCtnBottom = fourthDivRef.current?.getBoundingClientRect()?.bottom
      const lastEarthCtnTop = lastDivRef.current?.getBoundingClientRect()?.top
      const lastEarthCtnBottom = lastDivRef.current?.getBoundingClientRect()?.bottom

      if ((firstEarthCtnTop > 0)) {
        console.log("We are out above")
        firstInnerDivRef.current.style.position = 'relative'
        lastInnerDivRef.current.style.opacity = 0
      } else if (firstEarthCtnTop <= 0 && lastEarthCtnTop <= 0) {
        console.log("We are out below")

        fourthInnerDivRef.current.style.position = 'relative'
        fourthInnerDivRef.current.style.opacity = 0
        lastInnerDivRef.current.style.position = 'relative'
        lastInnerDivRef.current.style.opacity = 1

        document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector5")[0].style.background = '#0D322E'
        document.getElementsByClassName("earth-selector5")[1].style.background = '#0D322E'

      } else if (firstEarthCtnTop <= 0 && lastEarthCtnTop > 0) {
        console.log("We are in")

        if (firstEarthCtnBottom > 0) {
          console.log("We are in 1")
          firstInnerDivRef.current.style.position = 'fixed'
          firstInnerDivRef.current.style.opacity = 1
          secondInnerDivRef.current.style.position = 'relative'
          secondInnerDivRef.current.style.opacity = 0

          document.getElementsByClassName("earth-selector1")[0].style.background = '#0D322E'
          document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'

        } else if (firstEarthCtnBottom <= 0 && secondEarthCtnBottom > 0) {
          console.log("We are in 2")
          firstInnerDivRef.current.style.position = 'relative'
          firstInnerDivRef.current.style.opacity = 0
          secondInnerDivRef.current.style.position = 'fixed'
          secondInnerDivRef.current.style.opacity = 1
          thirdInnerDivRef.current.style.position = 'relative'
          thirdInnerDivRef.current.style.opacity = 0

          document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector2")[0].style.background = '#0D322E'
          document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
        } else if (secondEarthCtnBottom <= 0 && thirdEarthCtnBottom > 0) {
          console.log("We are in 3")
          secondInnerDivRef.current.style.position = 'relative'
          secondInnerDivRef.current.style.opacity = 0
          thirdInnerDivRef.current.style.position = 'fixed'
          thirdInnerDivRef.current.style.opacity = 1
          fourthInnerDivRef.current.style.position = 'relative'
          fourthInnerDivRef.current.style.opacity = 0

          document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector3")[0].style.background = '#0D322E'
          document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
        } else if (thirdEarthCtnBottom <= 0 && fourthEarthCtnBottom > 0) {
          console.log("We are in 4")
          thirdInnerDivRef.current.style.position = 'relative'
          thirdInnerDivRef.current.style.opacity = 0
          fourthInnerDivRef.current.style.position = 'fixed'
          fourthInnerDivRef.current.style.opacity = 1
          lastInnerDivRef.current.style.position = 'relative'
          lastInnerDivRef.current.style.opacity = 0

          document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector4")[0].style.background = '#0D322E'
          document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
        } else if (fourthEarthCtnBottom <= 0 && lastEarthCtnBottom > 0) {
          console.log("We are in 5")
          fourthInnerDivRef.current.style.position = 'relative'
          fourthInnerDivRef.current.style.opacity = 0
          lastInnerDivRef.current.style.opacity = 1

          document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
          document.getElementsByClassName("earth-selector5")[0].style.background = '#0D322E'
          document.getElementsByClassName("earth-selector5")[1].style.background = '#0D322E'
        }
      }

      if (firstEarthCtnTop > 0) {
        earthTextDivRef.current.style.position = 'absolute'
      }

      if (lastEarthCtnTop <= 0) {
        earthTextDivRef.current.style.position = 'absolute'
        earthTextDivRef.current.style.visibility = 'hidden'
        earthTextTmpDivRef.current.style.visibility = 'visible'
      } else if (firstEarthCtnTop <= 0) {
        earthTextDivRef.current.style.position = 'fixed'
        earthTextDivRef.current.style.visibility = 'visible'
        earthTextTmpDivRef.current.style.visibility = 'hidden'
      }
    })
  }, [])

  const EarthMainTextComponent = () => (
    <div className="content-ctn">
      <div className="earth-text-inner-ctn">
        <div>
          <h4>E JAK EARTH</h4>
          <h2>Ziemia</h2>
        </div>
        <div>
          <p>Atrakcyjna nieruchomość na Woli Justowskiej w Krakowie, położona w malowniczej okolicy, w sąsiedztwie Lasu Wolskiego. Piękna, spokojna i zielona dzielnica willowa miasta Krakowa,odizolowana od zgiełku miasta. Prestiżowa lokalizacja.</p>
        </div>
      </div>
      <div className="earth-selector-ctn">
        <div onClick={() => scrollTo('#earth1')} className="earth-selector earth-selector1"/>
        <div onClick={() => scrollTo('#earth2')} className="earth-selector earth-selector2"/>
        <div onClick={() => scrollTo('#earth3')} className="earth-selector earth-selector3"/>
        <div onClick={() => scrollTo('#earth4')} className="earth-selector earth-selector4"/>
        <div onClick={() => scrollTo('#earth5')} className="earth-selector earth-selector5"/>
      </div>
    </div>
  )

  return (
    <section className="section-ctn">
      <div  className="earth-ctn" >

        <div
          className="earth-main-text-ctn"
          ref={earthTextDivRef}
          style={{ position: 'absolute', visibility: 'visible'}}
        >
          <EarthMainTextComponent/>
        </div>

        <div id="earth1" ref={firstDivRef} className="earth-bg-ctn">
          <div
            ref={firstInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn1"
            style={{zIndex: 15, opacity: 1}}
          >
            <div className="earth-text-ctn1">
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-1.png"
                alt="Pointer 1"
                placeholder="none"
                className="earth-pointer-1"
              />
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-mobile-1.png"
                alt="Pointer 1"
                placeholder="none"
                className="earth-pointer-mobile-1"
              />
              <div className="earth-inner-text-ctn">
                <h5>Większość działki stanowi zieleń</h5>
                <p>Znajdziesz ją nawet na dachu</p>
              </div>
            </div>
          </div>
        </div>

        <div id="earth2" ref={secondDivRef} className="earth-bg-ctn">
          <div
            ref={secondInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn2"
            style={{zIndex: 14, opacity: 1}}>

            <div className="earth-text-ctn2">
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-2.png"
                alt="Pointer 2"
                placeholder="none"
                className="earth-pointer-2"
              />
              <div className="earth-inner-text-ctn">
                <h5>Eko transport</h5>
                <p>Ładuj swoje elektryczne auto pod domem</p>
              </div>
            </div>
          </div>
        </div>

        <div id="earth3" ref={thirdDivRef} className="earth-bg-ctn">
          <div
            ref={thirdInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn3"
            style={{zIndex: 14, opacity: 1}}>

            <div className="earth-text-ctn3">
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-3.png"
                alt="Pointer 3"
                placeholder="none"
                className="earth-pointer-3"
              />
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-mobile-3.png"
                alt="Pointer 3"
                placeholder="none"
                className="earth-pointer-mobile-3"
              />
              <div className="earth-inner-text-ctn">
                <h5>Innowacyjny dach</h5>
                <p>Przygotowany pod panele fotowoltaiczne</p>
              </div>
            </div>
          </div>
        </div>

        <div id="earth4" ref={fourthDivRef} className="earth-bg-ctn">
          <div
            ref={fourthInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn4"
            style={{zIndex: 14, opacity: 1}}>

            <div className="earth-text-ctn4">
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-4.png"
                alt="Pointer 4"
                placeholder="none"
                className="earth-pointer-4"
              />
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-mobile-4.png"
                alt="Pointer 4"
                placeholder="none"
                className="earth-pointer-mobile-4"
              />
              <div className="earth-inner-text-ctn">
                <h5>Rekuperacja</h5>
                <p>Ciesz się świeżym powietrzem</p>
              </div>
            </div>

          </div>
        </div>

        <div id="earth5" ref={lastDivRef} className="earth-bg-ctn">
          <div
            className="earth-main-text-ctn"
            ref={earthTextTmpDivRef}
            style={{ position: 'absolute', visibility: 'hidden'}}
          >
            <EarthMainTextComponent/>
          </div>
          <div
            ref={lastInnerDivRef}
            className="earth-bg-ctn  earth-bg-ctn5"
            style={{zIndex: 13,  opacity: 1}}>

            <div className="earth-text-ctn5">
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-5.png"
                alt="Pointer 5"
                placeholder="none"
                className="earth-pointer-5"
              />
              <StaticImage
                src="../../../images/earth-pointers/earth-pointer-mobile-5.png"
                alt="Pointer 5"
                placeholder="none"
                className="earth-pointer-mobile-5"
              />
              <div className="earth-inner-text-ctn">
                <h5>Rezygnacja z gazu</h5>
                <p>Bądź eko i płać mniej z pompą ciepła</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EarthSection
