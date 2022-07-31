const path = require(`path`)
const siteUrl = process.env.URL || `https://tascheandthepsychedelicroses.com`

module.exports = {
  siteMetadata: {
    title: `Tasche & the Psychedelic Roses`,
    description: `New Orleans-based psych dream rock'n'roll`,
    author: `Joanna Tomassoni`,
    keywords: [
      'tasche',
      'psychedelic roses',
      'roses',
      'psych',
      'psych rock',
      'tasche de la rocha',
    ],
    siteUrl: `https://tascheandthepsychedelicroses.com`,
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
        name: 'epk',
        link: '/epk',
      },
      {
        name: 'shop',
        link: '/shop',
      },
      {
        name: 'photos',
        link: '/photos',
      },
    ]
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-QRH9LMCKBJ", // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
  ],
}
