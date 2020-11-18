const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `blog/${edge.node.fields.slug}`,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: edge.node.fields.slug,
      },
    })
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    { name: "Hoop.It.App", link: "https://hoopitapp.herokuapp.com/", imgSrc:'https://res.cloudinary.com/duzle7rzg/image/upload/q_auto,f_auto/v1596015873/Portfolio/project-images/czoivcwynjlfuoti0rlp.png' },
    { name: "Fire Store", link: "https://fire-store.netlify.app/", imgSrc:'https://res.cloudinary.com/duzle7rzg/image/upload/v1605721753/Portfolio/project-images/jfru1jpn9wnpnecfcokp.png' },
    { name: "Gigzilla", link: "https://gig-zilla.herokuapp.com/", imgSrc:'https://res.cloudinary.com/duzle7rzg/image/upload/q_auto,f_auto/v1596016004/Portfolio/project-images/h5epboy4xkokpqp5p6aj.png' },
    { name: "Mad Science", link: "https://colorpulse6.github.io/mad-science/", imgSrc:'https://res.cloudinary.com/duzle7rzg/image/upload/q_auto,f_auto/v1596015872/Portfolio/project-images/s5xigxb6xn8ruluk6gq4.png' },
    

  ]
  projects.forEach(project => {
    const node = {
      name: project.name,
      link: project.link,
      imgSrc: project.imgSrc,
      id: createNodeId(`Project-${project.name}`),
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    }
    actions.createNode(node)
  })
}


