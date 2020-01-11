module.exports = {
  siteMetadata: {
    title: `Present Truth & Health`,
    abvTitle: 'PTH Ministries',
    description: `A deep study into present truth, prophecy and health`,
    author: `PTHM Developers`,
  },
  plugins: [
    `gatsby-plugin-webpack-size`,  
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blank-icon.png`, // This path is relative to the root of the site.
      },
    },

    // 
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
