import React, {Suspense, Fragment, lazy} from "react"
import {connect} from 'react-redux'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import {getSession} from "../utils/session"
import PublicRoute from "./PublicRouter"
import PrivateRoute from "./PrivateRouter"
import {ChatHeader} from '../components/Chat/styles'
import HomePage from '../pages/'
import ChatPage from '../pages/chat'

const history = createHistory()

const AppRouter = ({isAuthenticated}) => {
  return (
    <Fragment>
      <Suspense>
        <Router
          history={history}
        >
          <header>
            <div className="container">
              <ChatHeader>
                header chat
              </ChatHeader>
            </div>
          </header>
          <main>
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
          </main>
        </Router>
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
