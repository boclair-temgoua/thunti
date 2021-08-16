import React, { useState } from "react"
import authContext from "./contexts/authContext"
import jwt from 'jsonwebtoken'

// ** Get token
import { isUserLoggedIn } from './utility'

// ** Router Import
import Router from './router/Router'

const App = props => {
    const [userData, setUserData] = useState(isUserLoggedIn())
    const userSite = jwt.decode(userData?.accessToken) 
    return (
        <authContext.Provider value={{ userSite, setUserData}} >
            <Router />
        </authContext.Provider>
    )
}
export default App
