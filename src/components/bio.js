import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

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
  console.log(avatar)
  return (
    <div className="card"
      css={css`
        margin: auto;
        text-align: center;
        border-radius: 0;
        border: 4px solid var(--color-secondary-lighter);
        min-height: 200px;
      `}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4">
            <div className="card-title">{author.name}</div>
            {avatar && (
              <Image
                fixed={avatar}
                alt={author?.name || ``}
                imgStyle={{
                  borderRadius: '50%',
                }}
                css={css`
                  display: block;
                  margin: auto;
                  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
                  filter: grayscale(100%);
                `}
              />
            )}
          </div>
          <div className="col">
            <div className="card-text"
              css={css`
            text-align: left;
            font-size: 12px;
        `}>
              {author?.summary || null}
            </div>
            <div className="row icon-row mt-auto"
              css={css`
                font-size: 36px;
                padding: 10px;
              `}
            >
              <FaLinkedin href={`https://www.linkedin.com/in/${social?.linkedIn || ``}`}
                target="_blank" rel="noreferrer" />
              
              <FaGithub href={`https://github.com/tedrand`}
                target="_blank" rel="noreferrer" />
            </div>
            
          </div>
        </div>


      </div>



    </div>
  )
}

export default Bio
