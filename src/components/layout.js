import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import layoutStyles from "../components/layout.module.css"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1
        css={css`
          color: var(--color-primary);
        `}
      >
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
    )
  }

  return (
    <div
      data-is-root-path={isRootPath}
      css={css`
        margin: auto;
        max-width: var(--maxWidth-wrapper);
        padding: ${rhythm(0.5)} var(--spacing-12);
        background-color: white;
      `}
    >
      <header
        css={css`
          margin-bottom: ${rhythm(1.5)};
        `}
      >
        {header}
      </header>
      <ul className={layoutStyles.navbar}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contact">Terms</Link>
        </li>
      </ul>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
