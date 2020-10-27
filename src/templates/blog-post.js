import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article
        className="blog-post container paper-container"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="article"
        />
        <hr />
        <nav className="blog-post-nav">
          <ul
            css={css`
              display: flex;
              flexwrap: wrap;
              justifycontent: space-between;
              liststyle: none;
              padding: 0;
            `}
          >
            <li className="nav-link">
              {previous && (
                <a
                  className="btn btn-primary"
                  href={previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </a>
              )}
            </li>
            <li className="nav-link">
              {next && (
                <a
                  className="btn btn-primary"
                  href={next.fields.slug}
                  rel="next"
                >
                  {next.frontmatter.title} →
                </a>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
