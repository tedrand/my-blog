const path = require(`path`)

const COLLECTIONS = [
    {
        name: 'blog',
        postsPerPage: 12,
    },
    {
        name: 'static',
        postsPerPage: 12,
    },
    {
        name: 'flashcards',
        postsPerPage: 20,
    }
]

const filterEdges = name => edges =>
    edges.filter(edge => edge.node.fields.collection === name)

const buildPagesCollectionGenerator = ({ edges, createPage }) => ({
    name,
    postsPerPage
}) => {
    const filteredEdges = filterEdges(name)(edges)

    /**
     * CREATE INDIVIDUAL ITEMS
     */
    filteredEdges.forEach((edge, index) => {
        const { slug } = edge.node.fields;
        const previous =
            index === filteredEdges.length - 1 ? null : filteredEdges[index + 1].node
        const next = index === 0 ? null : filteredEdges[index - 1].node
        
        /**
         * USE FLASHCARD TEMPLATE FOR FLASHCARDS COLLECTION
         */
        const component = (name === "flashcards") ? 
            path.resolve(`./src/templates/flashcard.js`) : 
            path.resolve(`./src/templates/blog-post.js`)

        createPage({
            path: slug,
            component: component,
            context: { slug, previous, next },
        })
    })
}

module.exports = async function ({ actions, graphql, reporter }) {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            collection
                            slug
                        }
                        frontmatter {
                            title
                            type
                        }
                    }
                } 
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }

    const pagesCollectionGenerator = buildPagesCollectionGenerator({
        edges: result.data.allMarkdownRemark.edges,
        createPage,
    })

    COLLECTIONS.forEach(pagesCollectionGenerator)
}