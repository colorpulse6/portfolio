import React from "react"

import Layout from "../components/layout"
import profileImg from "../imgs/ProfilePic.png"
import profileImgRed from "../imgs/ProfilePicRedEyes.png"

import indexStyles from "./index.module.scss"
import Projects from "./projects.js"
import Contact from "./contact.js"
import About from "./about.js"
import Navbar from "../components/Navbar.js"

import Loading from "../components/loader.js"
import Loading2 from "../components/loader2.js"

import "jquery/dist/jquery.js"
import "bootstrap/dist/css/bootstrap.css"
import HoverImage from "react-hover-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDown,
  faAngleDoubleUp,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"

const scrollToProject = ref => window.scrollTo(0, ref.current.offsetTop)
const scrollToAbout = ref => window.scrollTo(0, ref.current.offsetTop)
const scrollToContact = ref => window.scrollTo(0, ref.current.offsetTop)
const scrollToTop = ref => window.scrollTo(window)

const IndexPage = () => {
  const [isLoading, setLoad] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)

    scrollToTop()
  }, [])

  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const executeScrollProject = () => scrollToProject(projectRef)
  const executeScrollAbout = () => scrollToAbout(aboutRef)
  const executeScrollContact = () => scrollToContact(contactRef)
  const executeScrollTop = () => scrollToTop(window)

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  const loadStyle = {
    position: "absolute",
    left: "37.7%",
    top: "-39.5px",
    background: "#06000000",
  }

  return (
    <Layout>
    <Navbar/>
      
      <div className={indexStyles.mainContainer}>
        <div
          class="jumbotron jumbotron-fluid"
          style={{
            backgroundImage:
              "url(" +
              "https://res.cloudinary.com/duzle7rzg/image/upload/v1596112152/Portfolio/project-images/esusev0fnwlvnpvqatwq.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "150px",
            boxShadow:
              "25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset",
          }}
        >
          <div class="container">
            <div style={loadStyle}>
              <Loading2 />
            </div>

            <HoverImage
              className={indexStyles.profileImg}
              src={profileImg}
              hoverSrc={profileImgRed}
            ></HoverImage>

            <h1 class="display-4">
              <div className={indexStyles.headerText}>
                <div>Hi I'm Nic,</div>
                <div>Full-Stack Web Developer.</div>
              </div>
            </h1>
          </div>
        </div>
        <a onClick={executeScrollProject} class={indexStyles.buttons}>
          <FontAwesomeIcon
            icon={faAngleDown}
            size="2x"
            className={indexStyles.icons}
          ></FontAwesomeIcon>
        </a>
        <hr className={indexStyles.hr}></hr>
        <div ref={projectRef} className={indexStyles.projectDiv}>
          <Projects />
        </div>

        <a onClick={executeScrollAbout} className={indexStyles.buttons}>
          <FontAwesomeIcon
            icon={faAngleDown}
            size="2x"
            className={indexStyles.icons}
          ></FontAwesomeIcon>
        </a>
        <hr className={indexStyles.hr}></hr>
        <div ref={aboutRef}>
          <About />
        </div>
        <a onClick={executeScrollContact} className={indexStyles.buttons}>
          <FontAwesomeIcon
            icon={faAngleDown}
            size="2x"
            className={indexStyles.icons}
          ></FontAwesomeIcon>
        </a>

        <hr className={indexStyles.hr}></hr>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>

      <button onClick={executeScrollTop} className={indexStyles.toTop}>
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          size="2x"
          className={indexStyles.icons}
        ></FontAwesomeIcon>
      </button>
      <h6 className={indexStyles.underConstro}>
        {" "}
        <FontAwesomeIcon icon={faExclamationTriangle} />
        This site is currently under construction.
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </h6>
    </Layout>
  )
}

export default IndexPage
