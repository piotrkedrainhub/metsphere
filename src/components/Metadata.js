import React from 'react'
import { Helmet } from 'gatsby-plugin-react-i18next'
import { withPrefix  } from "gatsby"

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
  >
    <script src={withPrefix('webp-format.js')} type="text/javascript"/>
  </Helmet>
)

export default Metadata
