import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <div className="container paper-container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>

    </Layout>
  )
}

export default NotFoundPage