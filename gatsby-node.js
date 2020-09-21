const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const gamePost = path.resolve('./src/templates/game-post.js')
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            games: allContentfulGamePost {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
            blogs: allContentfulBlogPost {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const games = result.data.games.edges

        games.forEach((game, index) => {
          createPage({
            path: `/game/${game.node.slug}/`,
            component: gamePost,
            context: {
              slug: game.node.slug,
            },
          })
        })
        //const blogs = result.data.blogs.edges
        // blogs.forEach((blog, index) => {
        //   createPage({
        //     path: `/blog/${blog.node.slug}/`,
        //     component: blogPost,
        //     context: {
        //       slug: blog.node.slug,
        //     },
        //   })
        // })
      })
    )
  })
}
