import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
const Contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/formSuccess"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
         <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Contact
