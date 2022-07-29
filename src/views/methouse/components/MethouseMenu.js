import React, { useRef } from 'react'
import '../style/methouse-menu-style.scss'
import scrollTo from 'gatsby-plugin-smoothscroll'

const MethouseMenu = () => {

  const multiBtn = useRef()
  const earthBtn = useRef()
  const techBtn = useRef()

  React.useEffect(() => {
    const earthDiv = document.getElementById('earth')
    const techDiv = document.getElementById('tech')
    window.addEventListener('scroll', () => {
      if (techDiv.getBoundingClientRect().top <= 0) {
        multiBtn.current.className = ""
        earthBtn.current.className = ""
        techBtn.current.className = "selected-slide"
      } else if (earthDiv.getBoundingClientRect().top <= 0) {
        multiBtn.current.className = ""
        earthBtn.current.className = "selected-slide"
        techBtn.current.className = ""
      } else {
        multiBtn.current.className = "selected-slide"
        earthBtn.current.className = ""
        techBtn.current.className = ""
      }
    })
  }, [])


  return (
    <div className="methouse-menu-ctn">
      <div>
        <div className="content-ctn">
          <button ref={multiBtn} onClick={() => scrollTo('#multi')}>
            <h3>
              Wielofunkcyjność
            </h3>
          </button>
          <button ref={earthBtn} onClick={() => scrollTo('#earth')}>
            <h3>
              Ziemia
            </h3>
          </button>
          <button ref={techBtn} onClick={() => scrollTo('#tech')}>
            <h3>
              Techbologia
            </h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MethouseMenu
