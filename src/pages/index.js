import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import IconButton from "@material-ui/core/IconButton"

import GitHubIcon from "@material-ui/icons/GitHub"
import MailIcon from "@material-ui/icons/Mail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Index = ({ data, location }) => {
  const avatar = data.avatar.childImageSharp.fixed
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <div
      location={location}
      title={siteTitle}
      css={css`
        height: 100vh;
        overflow-y: hidden;
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ted Rand | Personal Portfolio</title>
        <link rel="canonical" href="https://www.tedrand.com" />
      </Helmet>
      <Navbar />
      <div
        css={css`
          min-height: 100vh;
          max-width: 35em;
          margin: auto;
          padding-top: 20vh;
          color: white;
          text-align: center;
          margin: 0 auto -96px; /* the bottom margin is the negative value of the footer's height */
        `}
      >
        {avatar && (
          <Image
            fixed={avatar}
            alt="TED RAND"
            imgStyle={{
              borderRadius: "50%",
            }}
            css={css`
              min-width: 50px;
              min-height: 50px;
              margin: auto;
              display: block;
            `}
          />
        )}
        <h1
          style={{
            color: "var(--color-lighter)",
          }}
        >
          Patent Agent | Law Student
        </h1>
        <IconButton className="icon-button" href="https://github.com/tedrand">
          <GitHubIcon className="icon-color" />
        </IconButton>
        <IconButton
          className="icon-button"
          href="https://www.linkedin.com/in/tedrand/"
        >
          <LinkedInIcon className="icon-color" />
        </IconButton>
        <IconButton className="icon-button" component={Link} to="/contact">
          <MailIcon className="icon-color" />
        </IconButton>
      </div>
      <Footer />
    </div>
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
