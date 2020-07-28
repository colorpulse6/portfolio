import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SocialMediaIconsReact } from "social-media-icons-react"

import footerStyles from "./footer.module.scss"
const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.iconContainer}>
        <div className={footerStyles.icons}>
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="github"
            iconColor="rgba(83,81,81,1)"
            backgroundColor="rgba(212,210,210,1)"
            iconSize="3"
            roundness="50%"
            url="https://github.com/colorpulse6"
            size="30"
          />
        </div>
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="0"
          borderStyle="solid"
          icon="linkedin"
          iconColor="rgba(83,81,81,1)"
          backgroundColor="rgba(212,210,210,1)"
          iconSize="3"
          roundness="50%"
          url="https://www.linkedin.com/in/nic-barnes-a3297217/"
          size="30"
        />
      </div>

      <p>{data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
