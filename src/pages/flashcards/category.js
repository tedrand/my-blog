import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const CrimProFlashcards = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  console.log(location.pathname)
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <div className="container paper-container">
        <h1>Law School Flashcards</h1>
        <h3>Category - MPRE</h3>
        <hr />
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        <div className="row">
          <div className="col-md-8">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <div className="col"
                  css={css`
                  border: 2px solid var(--color-secondary-lighter);
                  padding: 10px;
                  margin-bottom: 10px;
                  margin-right: 5px;
                `}>
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
          <div className="container col-md-4"
            css={css`
              padding: 20px;
              background-color: lightgray;
              min-height: 200px;
            `}
          >
            <p>Want Recent Federal Circuit Decisions?</p>
            <a className="btn btn-lg btn-primary" href="/tracker">Go to Tracker</a>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default CrimProFlashcards

export const pageQuery = graphql`
  query getFlashcardCategory($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          type: { eq: "flashcard" } 
          subtype: { eq: "question" } 
          category: { eq: $category }
        } 
      }
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
