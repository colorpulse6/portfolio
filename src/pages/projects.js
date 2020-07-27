import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ProjectsPage = () => {
  
  return (

    <Layout>
      <h1>My Projects</h1>
      <li><Link to="https://hoopitapp.herokuapp.com/" target="_blank" rel="noreferrer">Hoop.It.App</Link></li>
      <li><Link to="https://gig-zilla.herokuapp.com/" target="_blank" rel="noreferrer">Gigzilla</Link></li>
      <li><Link to="https://colorpulse6.github.io/mad-science/" target="_blank" rel="noreferrer">Mad Science</Link></li>
    </Layout>
    
  )
}

export default ProjectsPage