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
  const sidebarProps = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 40000, config: config.slow })
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
          <animated.div className="col-md-6 container home-card"
            style={cardProps}
            css={css`
              margin-bottom: 10px;
            `}>
            <Bio avatar={avatar} />
          </animated.div>
          <div className="col-md-6"
            style={sidebarProps}>
            <animated.div className="card home-card"
              css={css`
              padding: 20px;
              background-color: #ffffff66;
            `}
            style={sidebarProps}
            >
              <p>Looking for law school flashcards?</p>
              <a className="btn btn-lg btn-warning mt-auto" href="/flashcards">Go to Flashcards</a>
            </animated.div>
            <div className="card home-card"
              css={css`
              padding: 20px;
              background-color: #ffffff66;
              min-height: 200px;
            `}
            >
              <p>Want Recent Federal Circuit Decisions?</p>
              <a href="/tracker" className="btn btn-lg btn-primary mt-auto">Go to Tracker</a>
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
