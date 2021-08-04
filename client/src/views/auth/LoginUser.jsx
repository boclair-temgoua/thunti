import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required().min(3).max(200),
    password: yup.string().required().min(8).max(200)
})

const LoginUser = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });
    const [message, setMessage] = useState('')

    const onSubmit = async (data, e) => {

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_NODE_URL}/login`, data)
            if (response) {
                if (response.data.accessToken) {
                    localStorage.setItem(process.env.REACT_APP_BASE_NAMETOKEN, JSON.stringify(response.data))
                }
            }

        } catch (error) { setMessage(error.response.data.message) }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-default">
                <div className="container-fluid px-0">
                    <a className="navbar-brand" href="./index.html"><img src="./assets/images/brand/logo/logo.svg" alt="" /></a>
                    <div className="collapse navbar-collapse" id="navbar-default">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarBrowse" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                                    Browse
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarBrowse">
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Web Development
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="./pages/course-category.html">
                                                    Bootstrap</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/course-category.html">
                                                    React
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className='auth-wrapper auth-v1 px-2'>
                <div className='auth-inner py-2'>
                    <h1>login page</h1>

                    {message && (
                        <div className='alert-body'>
                            <span className='ml-1'>
                                {message}
                            </span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email")} type="email" placeholder="Email" />
                        <p>{errors.email?.message}</p>

                        <input {...register("password")} type="password" placeholder="Password" />
                        <p>{errors.password?.message}</p>

                        <input type="submit" disabled={isSubmitting} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginUser