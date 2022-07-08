import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import '../../style/main.scss'
import favicon from '../../images/favicon.png'
import Metadata from '../../components/Metadata'


const HomePage = () => {
  const {t} = useTranslation()

  return (
    <div className="main-ctn">
      <Metadata
        title={t`home.title`}
        description={t`home.title`}
        ogImage={favicon}
      />
      <div className="content-ctn">
        <h1>{t`home.title`}</h1>
      </div>
    </div>
  )
}

export default HomePage
