import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import navbarStyles from "./navbar.module.scss"
import profileImg from "../imgs/ProfilePic.jpeg"

const Navbar = props => {
  //Query graphql db with tagged template literal
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <nav>
        <ul className={navbarStyles.navList}>
          <li>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="#home"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
              to="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
