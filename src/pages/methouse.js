import React from 'react'
import { graphql } from 'gatsby'
import METhousePage from '../views/methouse'

export default METhousePage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
