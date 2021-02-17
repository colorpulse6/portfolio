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
          
          
          
          <p class="lead" style={{marginTop:"-30px"}}>
          <Fade right>
            I am a web developer from Seattle now living in Berlin. I am interested in creative solutions to
            complex problems. I like to make corny video games, arrange
            orchestral music and solve math problems. My passion for programming is wraped in a deep interest in science and technology. </Fade>
          </p>
          <div className={aboutStyles.backgroundDiv}>
          <Fade left>
          <p class="lead" className={aboutStyles.background}>
          
          I have a background as a professional audio technician, composer, and musician.  In 2019 I decided to start to learn to code but was unable to fully commit due to my full-time work as a musician.  In March of 2020, the Corona virus effectively disabled musicians around the world provided a window of opportunity for me to study programming full-time.  <br></br>I attended the Iron Hack Full-stack Web Development Bootcamp from May - July 2020 which helped solidify my knowledge of JavaScript, React, and Node.js/Express.    My previous commitment to music enabled a perfect transition into programming and I basically transplanted my passion from one to the other.  Whatever I choose to do in my life, I do it with full commitment, and since I have chosen to be a programmer I have been completely invested in learning more and building projects. I believe the skills I obtained working as an audio technician, bandleader, manager, fund-raiser, composer, and performer have suited me well as a web developer.  Not only do the hard skills transition nicely from one discipline to the other but the soft skills as well such as strong communication, conflict management, leadership, teamwork, self-responsibility, and professionalism.  <br></br>  I treat my code as I would treat my compositions, with care, attention to detail, and a high level of organization.  I am an ardent disciple of challenging and difficult music and I would say the same is true for programming.  I like to challenge myself with complex systems and applications that require strict organization and planning.  In the end, I feel the effort is worth it and I have something that I can be proud of.  I am always looking to learn more and grow as a developer.  
 
          </p>
          </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
