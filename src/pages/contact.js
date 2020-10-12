import React from "react"
import { 
  FormControl, 
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button 
} from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <h1>Contact Me!</h1>
      <form method="post" action="https://getform.io/f/707b02c1-a650-4909-aab0-8cdee25960ff">
        <FormControl>
          <InputLabel htmlfor="email">Email Address</InputLabel>
          <Input id="my-email" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text-email">We'll never share your email.</FormHelperText>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel 
            htmlfor="name"
          >Name
          </InputLabel>
          <Input id="my-name" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text-name">Please include your full name.</FormHelperText>
        </FormControl>
        <br />
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          name="message"
          fullWidth
          
        />
        <Button
          variant="contained"
          color="primary"
          type="submit">
            Send
        </Button>
      </form>
    </Layout>
  )
}

export default ContactPage