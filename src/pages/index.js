import React from "react"
import Layout from "../components/layout"
import profileImg from "../imgs/ProfilePic.jpeg"
import indexStyles from "./index.module.scss"


const IndexPage = () => {

  return (
    
    <Layout>
      <div className={indexStyles.indexContainer}>
        <img src={profileImg} className={indexStyles.profileImg}></img>
        <hr></hr>
        <h1>Hello</h1>
        <h2>I'm Nic, a full stack web developer. Welcome.</h2>
        
      </div>
    
    </Layout>
  )

}

export default IndexPage
