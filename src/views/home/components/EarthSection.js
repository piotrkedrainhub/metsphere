import React, { useEffect, useRef } from 'react'
import '../style/earthStyle.scss'


const EarthSection = () => {

  const firstDivRef = useRef()
  const secondDivRef = useRef()
  const lastDivRef = useRef()

  const firstInnerDivRef = useRef()
  const secondInnerDivRef = useRef()
  const lastInnerDivRef = useRef()

  const earthTextDivRef = useRef()
  const earthTextTmpDivRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const firstEarthCtnTop = firstDivRef.current?.getBoundingClientRect()?.top
      const firstEarthCtnBottom = firstDivRef.current?.getBoundingClientRect()?.bottom
      const secondEarthCtnBottom = secondDivRef.current?.getBoundingClientRect()?.bottom
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
          lastInnerDivRef.current.style.position = 'relative'
          lastInnerDivRef.current.style.opacity = 0
        } else if (secondEarthCtnBottom <= 0 && lastEarthCtnBottom > 0) {
          console.log("We are in 3")
          secondInnerDivRef.current.style.position = 'relative'
          secondInnerDivRef.current.style.opacity = 0
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

  return (
    <section className="section-ctn">
      <div  className="earth-ctn" >

        <div
          className="earth-main-text-ctn"
          ref={earthTextDivRef}
          style={{ position: 'absolute', visibility: 'visible'}}
        >
          <div className="content-ctn">
            <h1>Ziemia</h1>
          </div>
        </div>

        <div ref={firstDivRef} className="earth-bg-ctn">
          <div
            ref={firstInnerDivRef}
            className="earth-bg-ctn"
            style={{zIndex: 15, backgroundColor: 'green', opacity: 1}}
          >
            <h1>1</h1>
          </div>
        </div>

        <div ref={secondDivRef} className="earth-bg-ctn">
          <div
            ref={secondInnerDivRef}
            className="earth-bg-ctn"
            style={{zIndex: 14, backgroundColor: 'blue', opacity: 1}}>
            <h1>2</h1>
          </div>
        </div>

        <div ref={lastDivRef} className="earth-bg-ctn">
          <div
            ref={lastInnerDivRef}
            className="earth-bg-ctn"
            style={{zIndex: 13, backgroundColor: 'red', opacity: 1}}>
            <div
              className="earth-main-text-ctn"
              ref={earthTextTmpDivRef}
              style={{ position: 'absolute', visibility: 'hidden' }}
            >
              <div className="content-ctn">
                <h1>Ziemia</h1>
              </div>
            </div>
            <h1>3</h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EarthSection
