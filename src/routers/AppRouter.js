import React, {Suspense, Fragment, lazy} from "react"
import {connect} from 'react-redux'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import {getSession} from "../utils/session"
import PublicRoute from "./PublicRouter"
import PrivateRoute from "./PrivateRouter"

const HomePage = lazy(() => import('../pages/'))
const ChatPage = lazy(() => import('../pages/chat'))

const history = createHistory()
console.log(history)

const AppRouter = ({isAuthenticated}) => {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <main>
          <Router
            history={history}
          >
            <Switch>
              <PublicRoute 
                isAuthenticated={isAuthenticated} 
                path="/" 
                component={HomePage} 
                exact />
              <PrivateRoute 
                isAuthenticated={isAuthenticated} 
                path="/chat" 
                component={ChatPage} />
            </Switch>
          </Router>
        </main>
      </Suspense>
    </Fragment>
  )
}

const mapStateToProps = () => {
  const session = getSession("chat-apps")
  return {
    isAuthenticated: session ? true : false
  }
}

export default connect(mapStateToProps)(AppRouter)
