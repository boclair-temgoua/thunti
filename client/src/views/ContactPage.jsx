import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Auth from '../contexts/authUser'

const ContactPage = () => {
    const { userSite, setUserSite } = useContext(Auth);

    const handleLogout = () => {
        setUserSite(false);
    }
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
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button>
                                </li>
                            </>
                        )}
                </ul>
                <div className='auth-inner py-2'>
                    <h1>Contact page</h1>
                </div>
            </div>
        </>
    )
}

export default ContactPage