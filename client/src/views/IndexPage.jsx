import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Auth from '../contexts/authContext'
import { handleLogout } from '../redux/actions/auth'

const IndexPage = () => {
    const { userSite, setUserSite } = useContext(Auth)
    const dispatch = useDispatch()

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
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={() => dispatch(handleLogout())}>Déconnexion</button>
                                </li>
                            </>
                        )}
                </ul>
                <div className='auth-inner py-2'>
                    <h1>Index page</h1>
                </div>
            </div>
        </>
    )
}

export default IndexPage