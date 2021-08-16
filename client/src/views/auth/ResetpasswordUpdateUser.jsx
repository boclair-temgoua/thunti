import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useParams } from 'react-router-dom'
const schema = yup.object().shape({
    password: yup.string().required().min(8).max(200),
    confirmPassword: yup.string().required().min(8).max(200)
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const ResetpasswordUpdateUser = () => {
    const { passwordresetToken } = useParams()
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    })
    const { isSubmitting, errors } = formState
    const [errormessage, setErrormessage] = useState('')

    const onSubmit = async (data, e) => {

        try {
            const response = await axios.put(`${process.env.REACT_APP_SERVER_NODE_URL}/reset_password/${passwordresetToken}`, data)
            if (response) {
                if (response.data.accessToken) {
                    localStorage.setItem(process.env.REACT_APP_BASE_NAMETOKEN, JSON.stringify(response.data))
                }
            }

        } catch (error) { setErrormessage(error.response.data.message) }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-default">
                <div className="container-fluid px-0">
                    <a className="navbar-brand" href="./index.html"><img src="./assets/images/brand/logo/logo.svg" alt="" /></a>
                    <div className="collapse navbar-collapse" id="navbar-default">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link to={`/`}>Home</Link>
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
                    <h1>Reset passord page</h1>

                    {errormessage && (
                        <div className='alert-body'>
                            <span className='ml-1'>
                                {errormessage}
                            </span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("password")} type="password" placeholder="Password" />
                        <p>{errors.password?.message}</p>

                        <input {...register("confirmPassword")} type="password" placeholder="confirmPassword" />
                        <p>{errors.confirmPassword?.message}</p>

                        <input type="submit" disabled={isSubmitting} />
                    </form>
                    <Link to={`/login`}>Login</Link>
                </div>
            </div>
        </>
    )
}

export default ResetpasswordUpdateUser