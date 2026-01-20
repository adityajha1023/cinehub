import React from 'react'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
