import React, { useEffect, useRef } from 'react'
import '../style/earth-style.scss'


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

      if ((firstEarthCtnTop > 0) || (firstEarthCtnTop <= 0 && lastEarthCtnBottom <= 0)) {
        console.log("We are out")
        firstInnerDivRef.current.style.position = 'relative'
        lastInnerDivRef.current.style.opacity = 0
      } else if (firstEarthCtnTop <= 0) {
        console.log("We are in")

        if (firstEarthCtnBottom > 0) {
          console.log("We are in 1")
          firstInnerDivRef.current.style.position = 'fixed'
          firstInnerDivRef.current.style.opacity = 1
          secondInnerDivRef.current.style.position = 'relative'
          secondInnerDivRef.current.style.opacity = 0
        } else if (firstEarthCtnBottom <= 0 && secondEarthCtnBottom > 0) {
          console.log("We are in 2")
          firstInnerDivRef.current.style.position = 'relative'
          firstInnerDivRef.current.style.opacity = 0
          secondInnerDivRef.current.style.position = 'fixed'
          secondInnerDivRef.current.style.opacity = 1
          thirdInnerDivRef.current.style.position = 'relative'
          thirdInnerDivRef.current.style.opacity = 0
        } else if (secondEarthCtnBottom <= 0 && thirdEarthCtnBottom > 0) {
          console.log("We are in 3")
          secondInnerDivRef.current.style.position = 'relative'
          secondInnerDivRef.current.style.opacity = 0
          thirdInnerDivRef.current.style.position = 'fixed'
          thirdInnerDivRef.current.style.opacity = 1
          fourthInnerDivRef.current.style.position = 'relative'
          fourthInnerDivRef.current.style.opacity = 0
        } else if (thirdEarthCtnBottom <= 0 && fourthEarthCtnBottom > 0) {
          console.log("We are in 4")
          thirdInnerDivRef.current.style.position = 'relative'
          thirdInnerDivRef.current.style.opacity = 0
          fourthInnerDivRef.current.style.position = 'fixed'
          fourthInnerDivRef.current.style.opacity = 1
          lastInnerDivRef.current.style.position = 'relative'
          lastInnerDivRef.current.style.opacity = 0
        } else if (fourthEarthCtnBottom <= 0 && lastEarthCtnBottom > 0) {
          console.log("We are in 5")
          fourthInnerDivRef.current.style.position = 'relative'
          fourthInnerDivRef.current.style.opacity = 0
          lastInnerDivRef.current.style.opacity = 1
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

        <div ref={firstDivRef} className="earth-bg-ctn">
          <div
            ref={firstInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn1"
            style={{zIndex: 15, opacity: 1}}
          >

          </div>
        </div>

        <div ref={secondDivRef} className="earth-bg-ctn">
          <div
            ref={secondInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn2"
            style={{zIndex: 14, opacity: 1}}>

          </div>
        </div>

        <div ref={thirdDivRef} className="earth-bg-ctn">
          <div
            ref={thirdInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn3"
            style={{zIndex: 14, opacity: 1}}>

          </div>
        </div>

        <div ref={fourthDivRef} className="earth-bg-ctn">
          <div
            ref={fourthInnerDivRef}
            className="earth-bg-ctn earth-bg-ctn4"
            style={{zIndex: 14, opacity: 1}}>

          </div>
        </div>

        <div ref={lastDivRef} className="earth-bg-ctn">
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

          </div>
        </div>

      </div>
    </section>
  )
}

export default EarthSection
