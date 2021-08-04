import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required().min(3).max(200),
    password: yup.string().required().min(8).max(200)
})

const RegisterUser = () => {
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
            <div className='auth-wrapper auth-v1 px-2'>
                <div className='auth-inner py-2'>
                    <h1>register page</h1>

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

export default RegisterUser