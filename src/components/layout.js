import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/index.scss'
import layoutStlyes from './layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Layout = (props) => {
    return (
        <div className={layoutStlyes.container}>
        
            <div className={layoutStlyes.content}>
                {/* <Navbar/> */}
                <h4 className={layoutStlyes.underConstro}> <FontAwesomeIcon icon={faExclamationTriangle} />This site is currently under construction.<FontAwesomeIcon icon={faExclamationTriangle} /></h4>
                {props.children}
            </div>
            
            <Footer/>
        </div>
    )
}

export default Layout