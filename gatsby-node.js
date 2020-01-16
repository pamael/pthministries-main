/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage } = actions
//   if (page.path === `/article/`) {
//     page.matchPath = `/articles/*`
//     createPage(page)
//   }
// }
exports.createPages = ({ actions }) => {

  const { createPage } = actions

  createPage({
    path: "/articles",
    matchPath: '/articles/:articleID',
    component: require.resolve(`./src/templates/article.js`),
    context: {},
  })
}



// const routing = () => (
//   <h1>TESTING</h1>
// )