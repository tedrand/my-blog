import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const Index = ({ data, location }) => {
  const avatar = data.avatar.childImageSharp.fixed
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={'Personal portfolio and legal blog.'} />
      <div className="container"
        css={css`
          padding-top: 30px;
          padding-bottom: 30px;
          min-height: 85vh;
        `}>
        <div className="jumbotron"
          css={css`
            background-color: #ffffffaa;
            padding: 10px;
          `}
        >
          <h1 className="display-4">Welcome to my Website!</h1>
          <p className="lead">Please check out my latest blog posts on patent law, and other IP issues.</p>
          <p className="lead">
            <a href="/Theodore_Rand_CV.pdf" className="btn btn-sm btn-primary">Download my CV</a>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 container"
            css={css`
              margin-bottom: 10px;
            `}>
            <Bio avatar={avatar} />
          </div>
          <div className="col-sm-6">
            <div className="container"
              css={css`
              padding: 20px;
              background-color: #ffffffcc;
              min-height: 200px;
            `}
            >
              <p>Want Recent Federal Circuit Decisions?</p>
              <a href="/tracker" className="btn btn-lg btn-primary">Go to Tracker</a>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 90, height: 90, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
        }
        title
      }
    }
  }
`
