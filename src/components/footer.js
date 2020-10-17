import React from "react"
import { css } from "@emotion/core"

const Footer = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark"
      css={css`
        -moz-box-shadow: 3px -2px 3px 3px var(--color-primary-lightest);
        -webkit-box-shadow: 3px -2px 3px 3px var(--color-primary-lightest);
        box-shadow: 3px -1px 3px 1px var(--color-secondary-lighter);
      `}
    >
      <span className="navbar-text">
        ©2020 Theodore A. Rand
      </span>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
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
