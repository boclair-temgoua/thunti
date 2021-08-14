// ** React Imports
import { Suspense, useContext, lazy } from 'react'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

// ** Utils
import { isUserLoggedIn } from '../utility'

// ** Routes & Default Routes
import { Routes } from './routes'

const Router = () => {


  const LayoutRoutesAndPaths = layout => {
    const LayoutRoutes = []
    const LayoutPaths = []

    if (Routes) {
      Routes.filter(route => {
        // ** Checks if Route layout or Default layout matches current layout
        LayoutRoutes.push(route)
        LayoutPaths.push(route.path)

      })
    }
    return { LayoutRoutes, LayoutPaths }
  }

    // ** Init Error Component
  // const Error = lazy(() => import('../views/pages/Error'))
 /**
 ** Final Route Component Checks for Login & User Role and then redirects to the route
 */
  const FinalRoute = props => {
    const route = props.route

    if (
      (!isUserLoggedIn() && route.meta === undefined) ||
      (!isUserLoggedIn() && route.meta && !route.meta.authRoute && !route.meta.publicRoute)) {
      /**
      ** If user is not Logged in & route meta is undefined
      ** OR
      ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
      ** Then redirect user to login
      */
      return <Redirect to={`/login/`} />
    } else if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
      // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
      return <Redirect to='/' />
    } else {
      return <route.component {...props} />
    }
  }


  // ** Return Route to Render
  const ResolveRoutes = () => {
    // ** Get Routes and Paths of the Layout
    const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths()

    // ** We have freedom to display different layout for different route
    // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
    // ** that we want to implement like VerticalLayout or HorizontalLayout
    // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

    // ** RouterProps to pass them to Layouts
    const routerProps = {}

    return (
      <Route path={LayoutPaths}>
        <Switch>
          {LayoutRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact === true}
                render={props => {
                  // ** Assign props to routerProps
                  Object.assign(routerProps, {
                    ...props,
                    meta: route.meta
                  })

                  return (
                    <Suspense fallback={null}>
                      {/* Layout Wrapper to add classes based on route's layout, appLayout and className */}
                      <FinalRoute route={route} {...props} />
                    </Suspense>
                  )
                }}
              />
            )
          })}
        </Switch>
      </Route>
    )
  }
  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        {/* If user is logged in Redirect user to DefaultRoute else to login */}
        {ResolveRoutes()}
        {/* NotFound Error page */}
        {/* <Route path='*' exact component={Error} /> */}
      </Switch>
    </AppRouter>
  )
}

export default Router
