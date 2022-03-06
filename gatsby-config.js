const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Tasche & the Psychedelic Roses`,
    description: `New Orleans-based psych dream rock'n'roll`,
    author: `Joanna Tomassoni`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    social: {
      name: "",
      url: "https://www.google.com"
    },
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'shows',
        link: '/shows',
      },
      {
        name: 'music',
        link: '/music',
      },
      {
        name: 'press',
        link: '/press',
      },
      {
        name: 'shop',
        link: '/shop',
      },
    ]
  },
  plugins: [
    require.resolve(`${__dirname}/plugins/gatsby-bandsintown-source-plugin`),
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carouselImages`,
        path: `${__dirname}/src/images/carouselImages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gold-rose.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-background-image-es5`,
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: `/:`,
      },
    },
  ],
}
