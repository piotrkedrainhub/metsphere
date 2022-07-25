const path = require("path")
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)

module.exports = {
  siteMetadata: {
    title: `gatsbytemplate`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "todo"
      }
    },
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: "src/images/favicon.png",
        name: 'gatsbytemplate',
        short_name: 'gatsbytemplate',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0D322E',
        display: 'standalone',
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "locale",
        "path": `${__dirname}/translations`
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pl`],
        defaultLanguage: `pl`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com`,
        redirect: false,
      }
    }
  ]
}


