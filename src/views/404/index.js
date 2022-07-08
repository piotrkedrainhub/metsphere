import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import favicon from '../../images/favicon.png'
import Metadata from '../../components/Metadata'

const NotFoundPage = () => {
  const {t} = useTranslation()

  return (
    <main className="main-ctn" style={{padding: '96px'}}>
      <Metadata
        title={t`notfound.title`}
        description={t`notfound.title`}
        ogImage={favicon}
      />
      <h1 style={{marginBottom: '48px'}}>{t`notfound.title`}</h1>
      <Link to="/">{t`notfound.go_home`}</Link>.
    </main>
  )
}

export default NotFoundPage
