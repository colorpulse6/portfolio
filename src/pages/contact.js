import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-solid-svg-icons'


 


const Contact = () => {
    return (
        <Layout>
            
            <h1>Contact</h1>
            <FontAwesomeIcon icon={faPhone}/>
            <p>Phone</p>
            <Link to="mailto:colorpulse@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope}/>
                <p>Email</p>
            </Link>
            <FontAwesomeIcon icon={faGithub}/>
          
        </Layout>
    )
}

export default Contact

