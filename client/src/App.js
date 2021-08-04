import React, { useState } from "react"
import Auth from "./contexts/authUser"

// ** Get token
import { isUserLoggedIn } from './utility'

// ** Router Import
import Router from './router/Router'

const App = props => {
    const [userSite, setUserSite] = useState(isUserLoggedIn())
    return (
        <Auth.Provider value={{ userSite, setUserSite }} >
            <Router />
        </Auth.Provider>
    )
}
export default App
