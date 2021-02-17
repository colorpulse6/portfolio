/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 //API ACCESS: http://localhost:8000/___graphql

require('dotenv').config();


module.exports = {
  siteMetadata: {
    title: 'Nic Barnes Portfolio',
    author: 'Nic Barnes',
    image: "https://res.cloudinary.com/duzle7rzg/image/upload/v1596199074/Portfolio/project-images/pihx7vxkggvnptqrwjko.png",
    url:"https://nichalasbarnes.com/",
    description:"Nic Barnes Portfolio Site"

  },

  plugins: [
    
      `gatsby-plugin-react-helmet`
    ,
    
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nic Barnes Portfolio`,
        short_name: `Nic Barnes Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
       
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` //Tell Gatsby playground to access markdowns from src
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
              
            }
          }
        ]
      }
    }
  ],
}
