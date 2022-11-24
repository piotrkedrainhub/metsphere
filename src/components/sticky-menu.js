import React from 'react'
import Menu from './Menu'
import './menu-style.scss'

const StickyMenu = () => {

  const [opacity, setOpacity] = React.useState(0)
  const [visibility, setVisibility] = React.useState('hidden')

  React.useEffect(() => {
    if (document.documentElement.scrollTop >= 200) {
      setOpacity(1)
      setVisibility('visible')
    } else {
      setOpacity(0)
      setVisibility('hidden')
    }
    const handleScroll = () => {
      if (document.documentElement.scrollTop >= 200) {
        setOpacity(1)
        setVisibility('visible')
      } else {
        setOpacity(0)
        setVisibility('hidden')
      }
    }

    window.addEventListener('scroll', () => handleScroll())
    return window.removeEventListener('scroll', () => handleScroll())
  }, [])


  return (
    <div className="sticky-menu-ctn" style={{opacity: opacity, visibility: visibility}}>
      <Menu/>
    </div>
  )
}

export default StickyMenu
