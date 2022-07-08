import React from 'react'
import { Helmet, useTranslation } from 'gatsby-plugin-react-i18next'
import '../../style/main.scss'
import favicon from '../../images/favicon.png'


const HomePage = () => {
  const {t} = useTranslation()

  return (
    <div className="main-ctn">
      <Helmet
        title={t`home.title`}
        meta={[
          {
            name: `description`,
            content: t`home.title`,
          },
          {
            name: `author`,
            content: 'piotrkedra'
          },
          {
            property: `og:image`,
            content: favicon
          },
        ]}
      />
      <div className="content-ctn">
        <h1>{t`home.title`}</h1>
      </div>
    </div>
  )
}

export default HomePage
