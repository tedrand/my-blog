import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <div style={{ color: `teal` }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  )
}

export default AboutPage