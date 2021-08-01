import { lazy } from 'react'

const PageRoutes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('../../views/IndexPage')),
        meta: { publicRoute: true }
    }

]

export default PageRoutes
