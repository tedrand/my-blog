import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <h1>{post.title}</h1>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulBlogPost(slug: { eq: $slug }) {
            title
        }
    }
`