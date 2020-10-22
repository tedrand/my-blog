import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const FlashcardIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const postCats = {}
  for (let post of posts) {
    if (postCats[post.frontmatter.category]) {
      postCats[post.frontmatter.category] += 1
    } else {
      postCats[post.frontmatter.category] = 1
    }
  }

  const catMap = {
    "mpre": "Multi-State Professional Responsibility Examination",
    "criminal-procedure": "Criminal Procedure"
  }

  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <div className="container paper-container">
        <h1>Law School Flashcards</h1>
        <hr />
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        <div className="row">
          <div className="col-md-8">
            {Object.keys(postCats).map((key, index) => {

              return (
                <a className="card flashcard"
                  href={`/flashcards/${key}`}
                  css={css`
                  border: 2px solid var(--color-secondary-lighter);
                  padding: 10px;
                  margin-bottom: 10px;
                  margin-right: 5px;
                `}>
                  <h3 className="card-title">
                    {catMap[key]}
                  </h3>
                  <div className="card-body">
                    {postCats[key]} cards in this deck
                  </div>
                </a>
              )
            })}
          </div>
          <div className="col-md-4">
            <div className="card"
              css={css`
              padding: 20px;
              background-color: lightgray;
              min-height: 200px;
            `}
            >
              <p>Want Recent Federal Circuit Decisions?</p>
              <a className="btn btn-lg btn-primary" href="/tracker">Go to Tracker</a>
            </div>

            <div className="card"
              css={css`
              padding: 20px;
              background-color: #ffffff99;
              min-height: 200px;
            `}
            >
              <p>Looking for law school flashcards?</p>
              <a className="btn btn-lg btn-primary" href="/flashcards">Go to Flashcards</a>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  )
}

export default FlashcardIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          type: { eq: "flashcard" } 
          subtype: { eq: "question" } 
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
          category
        }
      }
      totalCount
    }
  }
`
