import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <br />
            <Outlet />
        </>
    )
}

export default Layout
