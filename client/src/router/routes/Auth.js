import { lazy } from 'react'

const AuthRoutes = [
    {
        path: '/login/',
        exact: true,
        component: lazy(() => import('../../views/auth/LoginUser')),
        meta: { authRoute: true }
    },
    {
        path: '/register/',
        exact: true,
        component: lazy(() => import('../../views/auth/RegisterUser')),
        meta: { authRoute: true }
    },
    {
        path: '/about/',
        exact: true,
        component: lazy(() => import('../../views/AboutPage')),
        meta: { publicRoute: true }
    },
    {
        path: '/contact',
        exact: true,
        component: lazy(() => import('../../views/ContactPage')),
        meta: { publicRoute: true }
    },
    {
        path: '/profile/',
        exact: true,
        component: lazy(() => import('../../views/ProfilePage')),
        meta: { publicRoute: false }
    }
]

export default AuthRoutes
