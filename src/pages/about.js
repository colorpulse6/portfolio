import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <Link to ="/"><button>Back</button></Link>
            <h1>About</h1>
            <p>My name is Nic and I am a web deveoper and musician living in Berlin.  I am originally from Seattle. </p>
        </Layout>
    )
}

export default About

