import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

//Styles
import cx from "classnames"
import projectStyles from "./projects.module.scss"

//Images
import hoopItApp from "../imgs/hoopitapp.png"
import gigzilla from "../imgs/gigzilla.png"
import madScience from "../imgs/madScience.png"

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
    <Layout>
      <h1>Projects</h1>
      <div className={projectStyles.projectContainer}>
        {images.map(project => (
          <div>
            <li>
              <Link style={linkStyles} href={project.link} target="_blank"             rel="noreferrer"
>
                <h3>{project.name}</h3>
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
    </Layout>
  )
}

export default ProjectsPage
