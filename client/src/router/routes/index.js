// ** Routes Imports
import AuthRoutes from './Auth'
import PageRoutes from './Pages'

// ** Default Route
const DefaultRoute = '/'

// ** Merge Routes
const Routes = [
    ...AuthRoutes,
    ...PageRoutes,
]

export { DefaultRoute, Routes }
