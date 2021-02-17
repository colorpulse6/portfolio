import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import cx from "classnames"
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

const Contact = () => {
  return (
    <div class="container">
      <h1 style={{paddingTop:"20px"}} class="display-4"><Slide left>Contact Me</Slide></h1>
      <h4 class="lead"><Slide right>Have a question or want to work together?</Slide></h4>
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
              <Flip left>Your Name: </Flip><input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
            <Flip left>Your Email:</Flip> <input type="email" name="email" required/>
            </label>
          </div>

          <div>
            <label>
            <Flip  left>Message: </Flip><textarea name="message"></textarea>
            </label>
          </div>
        </div>

        <button
          type="submit"
          style={{marginTop:"-20px"}}
          className={cx(contactStyles.btn, contactStyles.effect01)}
        >
          <span>Send</span>
        </button>
      </form>
    </div>
  )
}

export default Contact
