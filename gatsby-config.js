module.exports = {
  siteMetadata: {
    title: `Drum Up`,
    description: `Drum Up descriptions`,
    author: `Carsten Grüter`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
