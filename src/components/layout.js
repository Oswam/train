import React from 'react'
import Navbar from './navbr'
import Footer from './footer'
import './layout.css'

const Layout = ({children}) => {
    return (
        <main>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>    
        </main>


)
}

export default Layout
