import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
}`

const Topnav = () => {
  return (
    <StaticQuery
      query={navQuery}
      render={data => (
        <div className="navbar navbar-dark navbar-expand-md topnav">
          <a className="navbar-brand" href="/">
            T.R.
          </a>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navList}
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
