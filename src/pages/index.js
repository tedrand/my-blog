import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

import { formatLocalPath } from "../utils"

const Index = ({ data, location }) => {
  const avatar = data.avatar.childImageSharp.fixed
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={"Personal portfolio and legal blog."}
      />
      <div className="row">
        <div
          className="col-md-6 container"
          css={css`
            padding: 15px;
            min-height: 85vh;
          `}
        >
          <div
            className="jumbotron"
            css={css`
              /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f5f6f6+0,dbdce2+21,b8bac6+49,dddfe3+80,f5f6f6+100;Grey+Pipe */
              background: -moz-linear-gradient(
                -45deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 100%
              ); /* FF3.6-15 */
              background: -webkit-linear-gradient(
                -45deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 100%
              ); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 100%
              ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#f5f6f6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
            `}
          >
            <h1 className="display-4">Welcome to my Website!</h1>
            <p className="lead">
              Please check out my latest blog posts on patent law, and other IP
              issues.
            </p>
          </div>
          <div>
            <Bio avatar={avatar} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="container sidebar-card">
            <h5>Legal Disclaimer</h5>
            <small>
              The information provided on this website does not, and is not
              intended to, constitute legal advice; instead, all information,
              content, and materials available on this site are for general
              informational purposes only.
            </small>
          </div>
          <div className="container sidebar-card">
            <h5>
              <u>Recent Federal Circuit Decisions</u>
            </h5>
            <div className="col">
              {data.allCourtDataJson.nodes.map(node => {
                const { name } = formatLocalPath(node.local_path)
                return (
                  <div className="row" key={node.download_url}>
                    <small>
                      <a href={node.download_url}>- {name}</a>
                    </small>
                  </div>
                )
              })}
            </div>
            <p>Want More Recent Federal Circuit Decisions?</p>
            <a
              href="/tracker"
              className="btn btn-lg btn-primary btn-block mt-auto"
            >
              Go to Tracker
            </a>
          </div>
          <div className="container sidebar-card">
            <h5>Looking for law school flashcards?</h5>
            <a
              className="btn btn-lg btn-primary btn-block mt-auto"
              href="/flashcards"
            >
              Go to Flashcards
            </a>
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
    allCourtDataJson(limit: 5) {
      nodes {
        local_path
        download_url
        date_created
      }
    }
  }
`
