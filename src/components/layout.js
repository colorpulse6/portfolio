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
                <h4 className={layoutStlyes.underConstro}>This site is currently under construction, so please excuse the mess!</h4>
                {props.children}
            </div>
            
            <Footer/>
        </div>
    )
}

export default Layout