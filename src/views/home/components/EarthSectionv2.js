import React, { useEffect, useRef } from 'react'
import '../style/earth-style.scss'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { StaticImage } from 'gatsby-plugin-image'

const EarthSectionv2 = () => {

  const firstDivRef = useRef()
  const secondDivRef = useRef()
  const thirdDivRef = useRef()
  const fourthDivRef = useRef()
  const lastDivRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const firstEarthCtnTop = firstDivRef.current?.getBoundingClientRect()?.top
      const secondEarthCtnTop = secondDivRef.current?.getBoundingClientRect()?.top
      const thirdEarthCtnTop = thirdDivRef.current?.getBoundingClientRect()?.top
      const fourthEarthCtnTop = fourthDivRef.current?.getBoundingClientRect()?.top
      const lastEarthCtnTop = lastDivRef.current?.getBoundingClientRect()?.top

      if (lastEarthCtnTop-1 <= 0) {
        firstDivRef.current.style.opacity = 0
        secondDivRef.current.style.opacity = 0
        thirdDivRef.current.style.opacity = 0
        fourthDivRef.current.style.opacity = 0
        lastDivRef.current.style.opacity = 1
        document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector5")[0].style.background = '#0D322E'
      } else if (fourthEarthCtnTop-1 <= 0) {
        firstDivRef.current.style.opacity = 0
        secondDivRef.current.style.opacity = 0
        thirdDivRef.current.style.opacity = 0
        fourthDivRef.current.style.opacity = 1
        lastDivRef.current.style.opacity = 0
        document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector4")[0].style.background = '#0D322E'
        document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
      } else if (thirdEarthCtnTop-1 <= 0) {
        firstDivRef.current.style.opacity = 0
        secondDivRef.current.style.opacity = 0
        thirdDivRef.current.style.opacity = 1
        fourthDivRef.current.style.opacity = 0
        lastDivRef.current.style.opacity = 0
        document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector3")[0].style.background = '#0D322E'
        document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
      } else if (secondEarthCtnTop-1 <= 0) {
        firstDivRef.current.style.opacity = 0
        secondDivRef.current.style.opacity = 1
        thirdDivRef.current.style.opacity = 0
        fourthDivRef.current.style.opacity = 0
        lastDivRef.current.style.opacity = 0
        document.getElementsByClassName("earth-selector1")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector2")[0].style.background = '#0D322E'
        document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
      } else if (firstEarthCtnTop-1 <= 0) {
        firstDivRef.current.style.opacity = 1
        secondDivRef.current.style.opacity = 0
        thirdDivRef.current.style.opacity = 0
        fourthDivRef.current.style.opacity = 0
        lastDivRef.current.style.opacity = 0
        document.getElementsByClassName("earth-selector1")[0].style.background = '#0D322E'
        document.getElementsByClassName("earth-selector2")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector3")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector4")[0].style.background = '#D3D2D1'
        document.getElementsByClassName("earth-selector5")[0].style.background = '#D3D2D1'
      }

    })
  }, [])

  return (
    <section className="section-ctn">
      <div  className="earth-ctn" >

        <div className="earth-main-text-outer-ctn">
          <div className="earth-main-text-ctn">
            <div className="content-ctn earth-ctn-text-helper">
              <div className="earth-text-inner-ctn">
                <div>
                  <h4>E JAK EARTH</h4>
                  <h2>Ziemia</h2>
                </div>
                <div>
                  <p>Koniec z szarym, szybko nagrzewającym się betonem. METHouse to domy stanowiące część krajobrazu, które wzbogacają okolicę, zamiast jej niszczyć.</p>
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
          </div>
        </div>

        <div id="earth1"  ref={firstDivRef} className="section-ctn earth-bg-ctn earth-bg-ctn1">
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

        <div id="earth2" ref={secondDivRef} className="section-ctn earth-bg-ctn earth-bg-ctn2">
          <div className="earth-text-ctn2">
            <StaticImage
              src="../../../images/earth-pointers/earth-pointer-2.png"
              alt="Pointer 2"
              placeholder="none"
              className="earth-pointer-2"
            />
            <div className="earth-inner-text-ctn">
              <h5>Eko transport</h5>
              <p>Ładuj samochód elektryczny pod domem</p>
            </div>
          </div>
        </div>

        <div id="earth3" ref={thirdDivRef} className="section-ctn earth-bg-ctn earth-bg-ctn3">
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

        <div id="earth4" ref={fourthDivRef} className="section-ctn earth-bg-ctn earth-bg-ctn4">
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

        <div id="earth5" ref={lastDivRef} className="section-ctn earth-bg-ctn earth-bg-ctn5">
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
    </section>
  )
}

export default EarthSectionv2
