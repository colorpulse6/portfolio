import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { SocialMediaIconsReact } from "social-media-icons-react"

const Contact = () => {
    const styles={display:'flex', flexDirection:'column'}
  return (
    <Layout>
      <h1>Contact</h1>
      <div style={styles}>
        <a href="tel:1-562-867-5309">
          {" "}
          <FontAwesomeIcon icon={faPhone} />
          
        </a>
        <a href="mailto:colorpulse@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
          
        </a>
        <SocialMediaIconsReact
            icon="github"
            iconSize="3"
            roundness="50%"
            url="https://github.com/colorpulse6"
            size="30"
          />
      </div>
    </Layout>
  )
}

export default Contact
