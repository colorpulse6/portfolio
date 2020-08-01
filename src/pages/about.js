import React from "react"
import "jquery/dist/jquery.js"
import "bootstrap/dist/css/bootstrap.css"
import aboutStyles from "./about.module.scss"
import Fade from 'react-reveal/Fade';


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
        
          <h1 class="display-4" id='text-path'><Fade left>About</Fade> </h1>
          
          
          
          <p class="lead">
          <Fade right>
            I am a web developer, writer and musician living in Berlin. I am
            originally from Seattle. I am interested in creative solutions to
            complex problems. I like to make corny video games, arrange
            orchestral music and solve math problems.</Fade>
          </p>
         
        </div>
      </div>
    </div>
  )
}

export default About
