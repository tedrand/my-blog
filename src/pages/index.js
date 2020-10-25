import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated, config } from "react-spring";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const Index = ({ data, location }) => {
  const avatar = data.avatar.childImageSharp.fixed
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const cardProps = useSpring({ marginLeft: '0px', opacity: 1, from: { marginLeft: '-50vw', opacity: 0 }, duration: 2000, delay: 500, config: config.tense })
  const sidebarProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow })

  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={'Personal portfolio and legal blog.'} />

      <div className="row">
        <div className="col-md-6 container"
          css={css`
            padding: 15px;
            min-height: 85vh;
          `}
        >
          <div className="jumbotron">
            <h1 className="display-4">Welcome to my Website!</h1>
            <p className="lead">Please check out my latest blog posts on patent law, and other IP issues.</p>
          </div>
          <animated.div
            style={cardProps}
            className="container"
            css={css`margin-bottom: 10px;`}>
            <Bio avatar={avatar} />
          </animated.div>
        </div>
        <animated.div
          className="col-md-5 ml-auto"
          style={sidebarProps}
          css={css`
              background-color: #eeeeee66;
              padding: 10px;
            `}>
          <div
            className="container"
            css={css`
                background-color: white;
                padding: 30px;
                margin-bottom: 10px;
              `}
          >
            <h5>Legal Disclaimer</h5>
            <small>The information provided on this website does not, and is not intended to,
            constitute legal advice; instead, all information, content, and materials
              available on this site are for general informational purposes only.</small>
          </div>
          <div
            className="container"
            css={css`
                background-color: white;
                padding: 30px;
                margin-bottom: 10px;
              `}
          >
            <h5>Looking for law school flashcards?</h5>
            <a className="btn btn-lg btn-warning mt-auto" href="/flashcards">Go to Flashcards</a>
          </div>
          <div
            className="container"
            css={css`
                background-color: white;
                padding: 30px;
              `}
          >
            <p>Want Recent Federal Circuit Decisions?</p>
            <a href="/tracker" className="btn btn-lg btn-primary mt-auto">Go to Tracker</a>
          </div>
        </animated.div>
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
