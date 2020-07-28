import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import projectStyles from "./projects.module.scss"

import hoopItApp from "../imgs/hoopitapp.png"
import gigzilla from "../imgs/gigzilla.png"
import madScience from "../imgs/madScience.png"

const ProjectsPage = () => {
  return (
    <Layout>
      <h1>My Projects</h1>
      <div className={projectStyles.projectContainer}>
        <li>
          <Link
            to="https://hoopitapp.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Hoop.It.App</h3>
            <img src={hoopItApp} className={projectStyles.projectImgs}></img>
          </Link>
        </li>

        <li>
          <Link
            to="https://gig-zilla.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Gigzilla</h3>
            <img src={gigzilla} className={projectStyles.projectImgs}></img>
          </Link>
        </li>

        <li>
          <Link
            to="https://colorpulse6.github.io/mad-science/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Mad Science</h3>
            <img src={madScience} className={projectStyles.projectImgs}></img>
          </Link>
        </li>
      </div>
    </Layout>
  )
}

export default ProjectsPage
