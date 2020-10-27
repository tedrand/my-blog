import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import SocialIcons from "./social-icons"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="card home-card">
      <div className="row">
        <div className="col-sm-4"
          css={css`text-align: center;`}>
          <div className="card-title">
            <h4>{author.name}</h4>
          </div>
          {avatar && (
            <Image fixed={avatar}
              alt={author?.name || ``}
              imgStyle={{ borderRadius: "30%" }}
            />
          )}
        </div>
        <div className="col-sm-6">
          <div className="card-text">
            <small>{author?.summary || null}</small>
          </div>
          <SocialIcons social={social} />
        </div>
      </div>
    </div>
  )
}

export default Bio
