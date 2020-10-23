import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const FlashcardIndex = ({ data, location }) => {
  const postCats = {}
  for (let node of data.allMarkdownRemark.nodes) {
    if (postCats[node.fields.slug.split("/")[1]]) {
      postCats[node.fields.slug.split("/")[1]] += 1
    } else {
      postCats[node.fields.slug.split("/")[1]] = 1
    }
  }

  const catMap = {
    "mpre": "Multi-State Professional Responsibility Examination",
    "criminal-procedure": "Criminal Procedure"
  }

  return (
    <Layout location={location}>
      <SEO title="Law School Flashcards" />
      <div className="container paper-container">
        <h1>Law School Flashcards</h1>
        <hr />
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
          <div className="col">
            {Object.keys(postCats).map((key, index) => {
              return (
                <a className="card"
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
      </div>
    </Layout>
  )
}

export default FlashcardIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [fields___slug, frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          type: { eq: "flashcard" } 
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
