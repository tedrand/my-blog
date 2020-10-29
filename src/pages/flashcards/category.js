import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const FlashcardsCategory = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes.filter(function (node) {
    return node.fields.slug.indexOf(location.pathname.split("/")[2]) !== -1
  })

  return (
    <Layout location={location}>
      <SEO
        title={"Lawschool Flashcards - " + location.pathname.split("/")[2]}
      />
      <div className="container paper-container">
        <h1>Law School Flashcards</h1>
        <h3>Category: {location.pathname.split("/")[2]}</h3>
        <hr />
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        <div className="col">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <div
                className="col"
                key={post.fields.slug}
                css={css`
                  border: 2px solid #41a07d;
                  padding: 10px;
                  margin-bottom: 10px;
                  margin-right: 5px;
                `}
              >
                <div>
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                  <small>{post.frontmatter.date}</small>
                </div>
                <div>
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

export default FlashcardsCategory

export const pageQuery = graphql`
  query getFlashcardCategory {
    allMarkdownRemark {
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
