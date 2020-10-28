import React from "react"
import CookieConsent from "react-cookie-consent"

import Topnav from "./topnav"
import Footer from "../components/footer"

const Layout = ({ location, children }) => {
  return (
    <div className="layout">
      <Topnav />
      {children}
      <CookieConsent
        location="none"
        buttonText="Accept"
        declineButtonText="Decline"
        style={{
          background: "var(--color-secondary)",
          border: "2px solid var(--color-tertiary-lightest)",
          opacity: 0.9,
          zIndex: 50,
          width: "400px",
          top: "65vh",
        }}
        buttonStyle={{
          backgroundColor: "var(--color-primary-lightest)",
          color: "white",
          fontSize: "15px",
        }}
        cookieName="gatsby-gdpr-google-analytics"
      >
        This website uses cookies to enhance the user experience. Check out the{" "}
        <a href="/privacy-policy">Privacy Policy</a> for more details.
      </CookieConsent>
      <Footer />
    </div>
  )
}

export default Layout
