/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
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
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div 
      css={css`
        display: flex;
      `}
    >
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          imgStyle={{
            borderRadius: '50%',
          }}
          css={css`
            margin-right: ${rhythm(2)};
            min-width: 50px;
            min-height: 50px;
            display: inline-block;
          `}
        />
      )}
      {author?.name && (
        <p
          css={css`
            display: inline-block;
            max-width: 400px;
          `}
        >
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <u>
            <a
              href={`https://www.linkedin.com/in/${social?.linkedIn || ``}`}
              target="_blank" rel="noreferrer"
            >
              Check out my LinkedIn
            </a>
          </u>
        </p>
      )}
    </div>
  )
}

export default Bio
