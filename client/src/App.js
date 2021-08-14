import React, { useState } from "react"
import authContext from "./contexts/authContext"

// ** Get token
import { isUserLoggedIn } from './utility'

// ** Router Import
import Router from './router/Router'

const App = props => {
    const [userSite, setUserSite] = useState(isUserLoggedIn())
    return (
        <authContext.Provider value={{ userSite, setUserSite }} >
            <Router />
        </authContext.Provider>
    )
}
export default App
