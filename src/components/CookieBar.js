import React from 'react'
import './cookie-bar-style.scss'

const CookiesBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (!isRodoAccepted())
      setTimeout(() => setIsOpen(true), 700)
  }, [])

  const acceptRodo = () => {
    document.cookie = 'rodo_accepted=true;max-age=31536000;path=/'
    setIsOpen(false)
  }

  const isRodoAccepted = () => {
    if (typeof document !== undefined) {
      const cookies = document.cookie.split(`; `)

      for (let cookie of cookies) {
        const item = cookie.split(`=`)
        const storedKey = item[0]
        const storedValue = item[1]

        if ('rodo_accepted' === storedKey) return storedValue
      }
    }
    return false
  }

  return (
    <div
      className="cookies-bar-ctn"
      style={isOpen ? { left: '2rem'} : { display: 'none'}}
    >
      <p>Nasza strona używa plików cookie</p>
      <button onClick={() => acceptRodo()}>Ok</button>
    </div>
  )
}

export default CookiesBar
