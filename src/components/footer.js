import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Image from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const footerImg = data?.icon?.childImageSharp?.fixed
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark footer-nav"
      css={css`
        -moz-box-shadow: 3px -2px 3px 3px var(--color-primary-lightest);
        -webkit-box-shadow: 3px -2px 3px 3px var(--color-primary-lightest);
        box-shadow: 3px -1px 3px 1px var(--color-secondary-lighter);
        padding-top:20px;
      `}
    >
      <a class="navbar-brand">
        <Image
          fixed={footerImg}
        />
        
      </a>
      <span className="navbar-text">
      ©2020 Theodore A. Rand
      </span>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ml-auto">
          <a className="nav-link" href="/terms-of-use">Terms of Use</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/privacy-policy">Privacy Policy</a>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
