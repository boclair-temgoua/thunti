import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Auth from '../contexts/authContext'

const ProfilePage = () => {
    const { userSite } = useContext(Auth)

    console.log('userSite =====>', userSite)
    return (
        <>
            <div className='auth-wrapper auth-v1 px-2'>
            <ul>
                <Link to={`/`}>Home</Link>
                <Link to={`/contact/`}>Contact</Link>
                <Link to={`/about/`}>About</Link>
                {(!userSite && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login/">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register/">
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )) || (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile/">
                                        Profile {userSite.firstName} | {userSite.lastName} | {userSite.email}
                                    </NavLink>
                                </li>
                            </>
                        )}
                </ul>
                <div className='auth-inner py-2'>
                    <h1>Profile page {userSite.firstName} {userSite.lastName}</h1>
                </div>
            </div>
        </>
    )
}

export default ProfilePage