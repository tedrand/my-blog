import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const footerQuery = graphql`
query FooterQuery {
  icon: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fixed(width: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

const Footer = () => {
  const data = useStaticQuery(footerQuery)
  const footerImg = data?.icon?.childImageSharp?.fixed
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark footer-nav">
      <a className="navbar-brand" href="/">
        <Image fixed={footerImg} />
      </a>
      <span className="navbar-text">©2020 Theodore A. Rand</span>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ml-auto">
          <a className="nav-link" href="/terms-of-use">
            Terms of Use
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/privacy-policy">
            Privacy Policy
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
