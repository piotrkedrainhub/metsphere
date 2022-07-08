import React from 'react'
import { Helmet } from 'gatsby-plugin-react-i18next'

const Metadata = ({title, description, ogImage}) => (
  <Helmet
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        name: `author`,
        content: 'piotrkedra'
      },
      {
        property: `og:image`,
        content: ogImage
      },
    ]}
  />
)

export default Metadata
