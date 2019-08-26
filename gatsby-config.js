/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
   title: 'spaceX',
   explore:'The world of our open source space come and join the movement',
   author:'@Deepak khatri',
   data:{
     name: 'Deepak',
     age:'27'
   }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
     `gatsby-plugin-styled-components` ,
     `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-transition-link`   
  ],
}
