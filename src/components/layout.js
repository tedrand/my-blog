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
        className="cookie-consent-box"
        location="none"
        buttonText="Accept"
        declineButtonText="Decline"
        style={{
          background: "#348064",
          border: "2px solid #b68e4b",
          opacity: 0.9,
          zIndex: 50,
          width: "400px",
          top: "65vh",
        }}
        buttonStyle={{
          backgroundColor: "#8e4bb6",
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
