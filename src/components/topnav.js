import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

// TODO: Fix this issue.
// This solution is ideal but breaks in heroku deployment
// instead full JS libraries are loaded in gatsby-browser.js
// import "bootstrap/js/src/collapse.js";

import Search from "../components/search"

const Topnav = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <div
          className="navbar navbar-dark navbar-expand-md"
          css={css`
            -moz-box-shadow: 3px 3px 7px 3px var(--color-primary-lightest);
            -webkit-box-shadow: 3px 3px 7px 3px var(--color-primary-lightest);
            box-shadow: 3px 3px 11px 3px var(--color-primary-lightest);
            z-index: 1;
          `}
        >
          <a className="navbar-brand" href="/">T.R.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
