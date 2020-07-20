import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <Link to ="/"><button>Back</button></Link>
            <h1>Contact</h1>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Linkedin</p>
            <p><a href="https://github.com/colorpulse6" target="_blank">GitHub</a></p>
            <p>Music</p>
            <p>Contact Form</p>
        </Layout>
    )
}

export default Contact

