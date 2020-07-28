import React from "react"
import { Link } from "gatsby"
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
  return (
    <Layout>
      <h1>Projects</h1>
      <div className={projectStyles.projectContainer}>
        <li>
          <Link
            style={linkStyles}
            to="https://hoopitapp.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Hoop.It.App</h3>
            <img
              src={hoopItApp}
              className={cx(
                projectStyles.projectImgs,
                projectStyles.fadeAnimation1
              )}
            ></img>
          </Link>
        </li>

        <li>
          <Link
            style={linkStyles}
            to="https://gig-zilla.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className={projectStyles.fadeAnimation4}>Gigzilla</h3>
            <img
              src={gigzilla}
              className={cx(
                projectStyles.projectImgs,
                projectStyles.fadeAnimation2
              )}
            ></img>
          </Link>
        </li>

        <li>
          <Link
            style={linkStyles}
            to="https://colorpulse6.github.io/mad-science/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className={projectStyles.fadeAnimation4}>Mad Science</h3>
            <img
              src={madScience}
              className={cx(
                projectStyles.projectImgs,
                projectStyles.fadeAnimation3
              )}
            ></img>
          </Link>
        </li>
      </div>
    </Layout>
  )
}

export default ProjectsPage
