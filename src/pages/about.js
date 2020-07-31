import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import "jquery/dist/jquery.js"
import "bootstrap/dist/css/bootstrap.css"
import aboutStyles from "./about.module.scss"
import { nodeName } from "jquery"

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          marginTop: "100px",
          background: "none",
        }}
      >
        <div class="container">
          <h1 class="display-4">About</h1>
          <p class="lead">
            I am a web developer, writer and musician living in Berlin. I am
            originally from Seattle. I am interested in creative solutions to
            complex problems. I like to make corny video games, arrange
            orchestral music and solve math problems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
