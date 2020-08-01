import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
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
    </div>
  )
}

export default ProjectsPage
