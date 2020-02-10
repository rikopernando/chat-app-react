import React, {Suspense, Fragment, lazy} from "react"
import {Switch, BrowserRouter as Router} from "react-router-dom"
import PublicRoute from "./PublicRouter"
import PrivateRoute from "./PrivateRouter"

const HomePage = lazy(() => import('../pages/'))
const ChatPage = lazy(() => import('../pages/chat'))

const AppRouter = () => {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <main>
          <Router>
            <Switch>
              <PublicRoute 
                path="/" 
                component={HomePage} 
                exact />
              <PrivateRoute 
                path="/chat" 
                component={ChatPage} />
            </Switch>
          </Router>
        </main>
      </Suspense>
    </Fragment>
  )
}

export default AppRouter
