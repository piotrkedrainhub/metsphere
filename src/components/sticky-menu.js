import React from 'react'
import Menu from './Menu'
import './menu-style.scss'

const StickyMenu = () => {

  const [opacity, setOpacity] = React.useState(0)

  React.useEffect(() => {
    if (document.documentElement.scrollTop >= 200) {
      setOpacity(1)
    } else {
      setOpacity(0)
    }
    const handleScroll = () => {
      if (document.documentElement.scrollTop >= 200) {
        setOpacity(1)
      } else {
        setOpacity(0)
      }
    }

    window.addEventListener('scroll', () => handleScroll())
    return window.removeEventListener('scroll', () => handleScroll())
  }, [])


  return (
    <div className="sticky-menu-ctn" style={{opacity: opacity}}>
      <Menu/>
    </div>
  )
}

export default StickyMenu
