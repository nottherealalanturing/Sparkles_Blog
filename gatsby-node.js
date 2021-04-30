require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")

/* module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
 */
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const poemsTemplate = path.resolve("./src/public/templates/poems.js")
  const thoughtTemplate = path.resolve("./src/public/templates/thoughts.js")
  const reviewsTemplate = path.resolve("./src/public/templates/reviews.js")
  const res = await graphql(`
    query {
      allContentfulPoems {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const reviewsRes = await graphql(`
    query {
      allContentfulReviews {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const thoughtsRes = await graphql(`
    query {
      allContentfulThoughts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  /* res.data.allContentfulPoems.edges.forEach(edge => {
    createPage({
      component: poemsTemplate,
      path: `/poems/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  }) 

  thoughtsRes.data.allContentfulThoughts.edges.forEach(edge => {
    createPage({
      component: thoughtTemplate,
      path: `/thoughts/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  reviewsRes.data.allContentfulReviews.edges.forEach(edge => {
    createPage({
      component: reviewsTemplate,
      path: `/reviews/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  */
}
