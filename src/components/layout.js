import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/index.scss'
import layoutStlyes from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStlyes.container}>
            <div className={layoutStlyes.content}>
                <Navbar/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout