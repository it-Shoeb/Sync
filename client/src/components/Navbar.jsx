import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className="flex border justify-between items-center p-2">
                <div className="navbar-lhs flex gap-8">

                    <div className="logo">
                        <Link to={"#"}>Sync</Link>
                    </div>

                    <div className="navlinks text-gray-500">
                        <ul className='flex gap-4'>
                            <li>
                                <Link to={"/Jobs"}>
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to={"/Contact"}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to={"/About"}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="navbar-rhs">
                    <div className="profile p-3 bg-gray-500 rounded-full"></div>
                </div>


            </div>
        </>
    )
}

export default Navbar
