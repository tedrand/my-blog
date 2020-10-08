import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Index = ({ data, location }) => {
  const avatar = data.avatar.childImageSharp.fixed
  return (
    <div
      location={location}
      css={css`
        height: 100vh;
        overflow-y: hidden;
      `}
    >
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
      }
    }
  }
`
