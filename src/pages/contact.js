import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import cx from "classnames"

const Contact = () => {
  return (
    <div className={contactStyles.container}>
      <h1>Contact Me</h1>
      <h4>Have a question or want to work together?</h4>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/formSuccess"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className={contactStyles.main}>
          <div>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Your Email: <input type="email" name="email" required/>
            </label>
          </div>

          <div>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={cx(contactStyles.btn, contactStyles.effect01)}
        >
          <span>Send</span>
        </button>
      </form>
    </div>
  )
}

export default Contact
