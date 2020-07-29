import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby'

import aboutStyles from "./about.module.scss"

const About = () => {

    return (
        <Layout>
            
            <h1>About</h1>

                <p className={aboutStyles.about}>I am a web deveoper, writer and musician living in Berlin.  I am originally from Seattle. I am interested in creative solutions to complex problems. I like to make corny video games, arrange orchestral music and solve math problems. </p>

        </Layout>
    )
}

export default About

