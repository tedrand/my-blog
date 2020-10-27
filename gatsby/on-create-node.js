const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "collection",
      value: collection,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
