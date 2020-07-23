/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 //API ACCESS: http://localhost:8000/___graphql

module.exports = {
  siteMetadata: {
    title: 'Nic Barnes Portfolio',
    author: 'Nic Barnes'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` //Tell Gatsby playground to access markdowns from src
      }
    },
    'gatsby-transformer-remark'
  ],
}
