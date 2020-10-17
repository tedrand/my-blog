import React from "react"
import { css } from "@emotion/core"

import Topnav from "./topnav"
import Footer from "../components/footer"

const Layout = ({ location, children }) => {
  
  return (
    <div
      css={css`
        background-color: var(--color-primary);
        background-image: linear-gradient(to top right, var(--color-primary), var(--color-secondary));
        background-repeat: no-repeat;
        // box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
        padding-bottom: 40px;
        min-height: 95vh;
      `}
    >
      <Topnav />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
