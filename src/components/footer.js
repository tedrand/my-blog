import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Footer = () => {
  return (
    <footer
      css={css`
        display: block;
        width: 100%;
        height: 48px;
        background-color: var(--color-heading);
        text-align: center;
        border-top: 3px solid var(--color-primary-lighter);
      `}
    >
      <div style={{ float: "left", display: "inline-block" }}>
        <Link className="nav-link" to="/privacy">
          ©2020 Theodore A. Rand
        </Link>
      </div>
      <div style={{ float: "right", display: "inline-block" }}>
        <Link className="nav-link" to="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className="nav-link" to="/terms-of-use">
          Terms of Use
        </Link>
      </div>
    </footer>
  )
}

export default Footer
