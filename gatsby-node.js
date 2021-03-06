const { resolve } = require(`path`)
const path = require(`path`)
const glob = require(`glob`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

//
exports.createPages = async ({ actions, graphql, reporter }) => {
  const templates = getTemplates()

  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: modifiedGmt, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          slug
          id
        }
      }
    }
  `)

  const contentTypeTemplateDirectory = `./src/templates/single/`
  const contentTypeTemplates = templates.filter((path) =>
    path.includes(contentTypeTemplateDirectory)
  )

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { nodeType, uri, slug, id } = node
      // this is a super super basic template hierarchy
      // this doesn't reflect what our hierarchy will look like.
      // this is for testing/demo purposes
      const templatePath = `${contentTypeTemplateDirectory}${nodeType}.js`

      const contentTypeTemplate = contentTypeTemplates.find(
        (path) => path === templatePath
      )

      if (!contentTypeTemplate) {
        return
      }

      const pathToPage = nodeType === 'Page' ? slug : uri

      await actions.createPage({
        component: resolve(contentTypeTemplate),
        path: pathToPage,
        context: {
          id,
          nextPage: (contentNodes[i + 1] || {}).id,
          previousPage: (contentNodes[i - 1] || {}).id,
        },
      })
    })
  )
}
