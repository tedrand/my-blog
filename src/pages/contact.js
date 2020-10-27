import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <div className="container paper-container">
        <h1>Contact Me!</h1>
        <form
          method="post"
          action="https://getform.io/f/707b02c1-a650-4909-aab0-8cdee25960ff"
        >
          <div className="form-group">
            <label htmlfor="my-email">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              id="my-email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlfor="my-name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              id="my-name"
            />
          </div>

          <div className="form-group">
            <label htmlfor="message">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="message"
              rows="5"
            ></textarea>
          </div>

          <button className="btn btn-primary" variant="primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
