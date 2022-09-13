import React from 'react'
import { CgChevronDoubleUp } from 'react-icons/cg'
import '../style/scroll-float-btn.scss'
import scrollTo from 'gatsby-plugin-smoothscroll'

const ScrollFloatBtn = () => {
  const [opacity, setOpacity] = React.useState(0)

  React.useEffect(() => {
    if (document.documentElement.scrollTop >= 1000) {
      setOpacity(1)
    } else {
      setOpacity(0)
    }
    const handleScroll = () => {
      if (document.documentElement.scrollTop >= 1000) {
        setOpacity(1)
      } else {
        setOpacity(0)
      }
    }

    window.addEventListener('scroll', () => handleScroll())
    return window.removeEventListener('scroll', () => handleScroll())
  }, [])
  return (
    <button
      className="scroll-float-btn-ctn"
      onClick={() => scrollTo('#begin')}
      style={{opacity: opacity}}
    >
      <CgChevronDoubleUp size={28}/>
    </button>
  )
}

export default ScrollFloatBtn
