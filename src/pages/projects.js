import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Popuper from "../components/Popup"
import reactIcon from "../imgs/react-original-wordmark.svg"
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
import pGIcon from "../imgs/postgresql.svg"
import tSIcon from "../imgs/typescript.svg"
import fBIcon from "../imgs/firebase.svg"
import gatsbyIcon from "../imgs/gatsby.svg"

import Flip from "react-reveal/Flip"
import Slide from "react-reveal/Slide"
import Bounce from "react-reveal/Bounce"
import { Popup, Card, Image, Rating } from "semantic-ui-react"

//Styles
import cx from "classnames"
import projectStyles from "./projects.module.scss"
import "bootstrap/dist/css/bootstrap.css"

const ProjectsPage = () => {
  const linkStyles = { textDecoration: "none" }
  const [hoverTech, setHoverTech] = useState("")

  let hoverStyles = {
    boxShadow: "5px 5px 2px 1px rgba(132, 37, 83, .3)"
  }  
  
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
      <h1 style={{ paddingTop: "20px", marginBottom: "5px" }} class="display-4">
        <Slide left>Projects</Slide>
      </h1>
      <div className={projectStyles.projectContainer}>
        {images.map(project => (
          <Popup
            trigger={
              <div>
                <li>
                  <Link
                    style={linkStyles}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 class="lead">
                      <Flip left>{project.name}</Flip>
                    </h3>
                    <img
                      src={project.imgSrc}
                      className={cx(
                        project.name === "Hoop.It.App" || project.name === "Fire Store"
                          ? projectStyles.projectImgs2
                          : projectStyles.projectImgs1,
                        projectStyles.fadeAnimation1
                      )}
                      onMouseEnter={() => {
                        setHoverTech(project.name)
                      }}
                      onMouseLeave={() => setHoverTech("")}
                    ></img>
                  </Link>
                </li>
              </div>
            }
            offset="0, 50px, 100px, 50px"
            position="left center"
          >
            <Popup.Header></Popup.Header>
            <Popup.Content>
              <Popuper name={project.name} />
            </Popup.Content>
          </Popup>
        ))}
      </div>
      <Bounce>
        <div className={projectStyles.iconDiv}>
          <img
            src={reactIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" || hoverTech === "Fire Store" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />

          <img
            src={hBIcon}
            className={projectStyles.iconSvg}
            style={hoverTech === "Gigzilla" ? hoverStyles : null}
          />

          <img
            src={nodeIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img
            src={expressIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img
            src={mongoIcon}
            className={projectStyles.iconSvg}
            style={hoverTech === "Hoop.It.App" ? hoverStyles : null}
          />
          <img src={pGIcon} className={projectStyles.iconSvg} style={hoverTech === "Job Toast" ? hoverStyles : null} />
          <img
            src={fBIcon}
            className={projectStyles.iconSvgfB}
            style={hoverTech === "Fire Store" ? hoverStyles : null}
          />
          <img
            src={jSIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Mad Science" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img src={tSIcon} className={projectStyles.iconSvg} style={hoverTech === "Job Toast" ? hoverStyles : null} />
          <img src={gatsbyIcon} className={projectStyles.iconSvgG} />
          <img
            src={cssIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Mad Science" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img
            src={htmlIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Mad Science" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img
            src={bootstrapIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla"
                ? hoverStyles
                : null
            }
          />
          <img
            src={npmIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Mad Science" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img
            src={herokuIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" || hoverTech === "Gigzilla" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
          <img
            src={vsIcon}
            className={projectStyles.iconSvg}
            style={
              hoverTech === "Hoop.It.App" ||
              hoverTech === "Fire Store" ||
              hoverTech === "Gigzilla" ||
              hoverTech === "Mad Science" ||
              hoverTech === "Job Toast"
                ? hoverStyles
                : null
            }
          />
        </div>
      </Bounce>
    </div>
  )
}

export default ProjectsPage
