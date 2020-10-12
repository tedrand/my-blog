import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Navbar = () => {
  return (
    <nav
      css={css`
        display: block;
        width: 100%;
        height: 48px;
        background-color: var(--color-dark);
        border-bottom: 3px solid var(--color-secondary-lighter);
      `}
    >
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About Me
      </Link>
      <Link className="nav-link" to="/blog">
        Blog
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default Navbar
