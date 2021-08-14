import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Auth from '../contexts/authContext'

const AboutPage = () => {
    const { userSite, setUserSite } = useContext(Auth)

    const handleLogout = () => {
        setUserSite(false)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand">Frontend Bootcamp</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#learn" className="nav-link">What You'll Learn</a>
                            </li>
                            <li className="nav-item">
                                <a href="#questions" className="nav-link">Questions</a>
                            </li>
                            <li className="nav-item">
                                <a href="#instructors" className="nav-link">Instructors</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section
                className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
            >
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>Become a <span className="text-warning"> Web Developer </span></h1>
                            <p className="lead my-4">
                                We focus on teaching our students the fundamentals of the latest
                                and greatest technologies to prepare them for their first dev role
                            </p>
                            <button
                                className="btn btn-primary btn-lg"
                                data-bs-toggle="modal"
                                data-bs-target="#enroll"
                            >
                                Start The Enrollment
                            </button>
                        </div>
                        <img
                            className="img-fluid w-50 d-none d-sm-block"
                            src="img/showcase.svg"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className="bg-primary text-light p-5">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

                        <div className="input-group news-input">
                            <input type="text" className="form-control" placeholder="Enter Email" />
                            <button className="btn btn-dark btn-lg" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage