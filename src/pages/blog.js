import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <div className="container paper-container">
        <h1>Claim Kraken</h1>
        <h5>A Patent Law Blog</h5>
        <hr />
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        <div className="col">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <div
                className="row"
                css={css`
                  border: 2px solid var(--color-secondary-lighter);
                  padding: 10px;
                  margin-bottom: 10px;
                  margin-right: 5px;
                `}
              >
                <div className="col-md-5">
                  <h4>
                    <a
                      href={post.fields.slug}
                      itemProp="url"
                      css={css`
                        text-decoration: none;
                        color: var(--color-primary);
                      `}
                    >
                      <span itemProp="headline">{title}</span>
                    </a>
                  </h4>
                  <small>{post.frontmatter.date}</small>
                </div>
                <div className="col-md-7">
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" }, published: { eq: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
      totalCount
    }
  }
`
