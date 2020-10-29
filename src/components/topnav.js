import React from "react"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Search from "../components/search"

const navList = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/blog">
          Blog
                </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">
          About
                </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  )
}

const navQuery = graphql`
query SearchIndexQuery {
  siteSearchIndex {
    index
  }
  icon: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fixed(width: 25) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}`

const Topnav = () => {
  const data = useStaticQuery(navQuery)
  const footerImg = data?.icon?.childImageSharp?.fixed
  
  return (
    <StaticQuery
      query={navQuery}
      render={data => (
        <div className="navbar navbar-dark navbar-expand-md topnav">
          <a className="navbar-brand" href="/">
            <Image fixed={footerImg} />
          </a>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navList()}
            <ul className="ml-auto navbar-nav">
              <Search searchIndex={data.siteSearchIndex.index} />
            </ul>
          </div>
        </div>
      )}
    />
  )
}

export default Topnav
