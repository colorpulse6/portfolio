import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import reactIcon from "../imgs/react-original-wordmark.svg";
import hBIcon from "../imgs/handlebars-original.svg"
import nodeIcon from "../imgs/nodejs-original-wordmark.svg"
import mongoIcon from "../imgs/mongodb-original-wordmark.svg"
import jSIcon from "../imgs/javascript-original.svg"
import cssIcon from "../imgs/css3-original-wordmark.svg"
import htmlIcon from "../imgs/html5-original-wordmark.svg"
import bootstrapIcon from "../imgs/bootstrap-plain-wordmark.svg"
import npmIcon from "../imgs/npm-original-wordmark.svg"
import herokuIcon from "../imgs/heroku-plain-wordmark.svg"
import expressIcon from "../imgs/express-original-wordmark.svg"
import vsIcon from "../imgs/visualstudio-plain-wordmark.svg"


import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';


import "bootstrap/dist/css/bootstrap.css"

import Layout from "../components/layout"

//Styles
import cx from "classnames"
import projectStyles from "./projects.module.scss"

const ProjectsPage = () => {
  const linkStyles = { textDecoration: "none" }
  
  //SOURCE CLOUDINARY
  const data = useStaticQuery(graphql`
    query MyProjectQuery {
      allProject {
        nodes {
          name
          link
          imgSrc
          id
        }
      }
    }
  `)
  const images = data.allProject.nodes

  return (
    <div class="container">
      <h1 class='display-4'><Slide left>Projects</Slide></h1>
      <div className={projectStyles.projectContainer}>
        {images.map(project => (
          <div>
            <li>
              <Link
                style={linkStyles}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <h3 class="lead"><Flip left>{project.name}</Flip></h3>
                <img
                  src={project.imgSrc}
                  className={cx(
                    projectStyles.projectImgs,
                    projectStyles.fadeAnimation1
                  )}
                ></img>
              </Link>
            </li>
          
          </div>
        ))}
      </div>
      <Bounce><div className={projectStyles.iconDiv}>
      <img src={reactIcon} className={projectStyles.iconSvg}/>
      <img src={hBIcon} className={projectStyles.iconSvg}/>
      <img src={nodeIcon} className={projectStyles.iconSvg}/>
      <img src={expressIcon} className={projectStyles.iconSvg}/>
      <img src={mongoIcon} className={projectStyles.iconSvg}/>
      <img src={jSIcon} className={projectStyles.iconSvg}/>
      <img src={cssIcon} className={projectStyles.iconSvg}/>
      <img src={htmlIcon} className={projectStyles.iconSvg}/>
      <img src={bootstrapIcon} className={projectStyles.iconSvg}/>
      <img src={npmIcon} className={projectStyles.iconSvg}/>
      <img src={herokuIcon} className={projectStyles.iconSvg}/>
      <img src={vsIcon} className={projectStyles.iconSvg}/>
    
    </div>
    </Bounce>
    
    </div>
  )
}

export default ProjectsPage
