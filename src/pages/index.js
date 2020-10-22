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
  const card2Props = useSpring({ marginTop: '0px', opacity: 1, from: { marginTop: '30vh', opacity: 0 }, duration: 2000, delay: 1500, config: config.slow })
  const sidebarProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow })
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
          <div className="col-md-6">
            <animated.div
              style={cardProps}
              className="container"
              css={css`margin-bottom: 10px;`}>
              <Bio avatar={avatar} />
            </animated.div>
            <div className="container">
              <animated.div className="home-card card"
                style={card2Props}
                css={css`
                margin: auto;
                text-align: center;
                border-radius: 0;
                border: 4px solid var(--color-secondary-lighter);
                min-height: 200px;
              `}
              >
                <h4 className="card-title">Legal Disclaimer</h4>
                <span className="card-body">
                  <small>The information provided on this website does not, and is not intended to, 
                  constitute legal advice; instead, all information, content, and materials 
                  available on this site are for general informational purposes only.</small>
                </span>
              </animated.div>
            </div>
          </div>
          <div className="col-md-6">
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
            <animated.div className="card home-card"
              css={css`
                padding: 20px;
                background-color: #ffffff66;
                min-height: 200px;
              `}
              style={sidebarProps}
            >
              <p>Want Recent Federal Circuit Decisions?</p>
              <a href="/tracker" className="btn btn-lg btn-primary mt-auto">Go to Tracker</a>
            </animated.div>

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
