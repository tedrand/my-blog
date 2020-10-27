const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, actions }) => {
  
  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({ node, getNode })

    actions.createNodeField({
      node,
      name: "collection",
      value: collection,
    })

    actions.createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
