import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let main
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )
  if (isRootPath) {
    main = (
      <main data-is-root-path={isRootPath}>
        {children}
      </main>
    )
  } else {
    main = (
      <main
        css={css`
          margin: auto;
          max-width: var(--maxWidth-wrapper);
          padding: var(--spacing-8) var(--spacing-12);
          background-color: white;
        `}
      >
        {children}
      </main>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Navbar />
      {main}
      <Footer />
    </div>
  )
}

export default Layout
