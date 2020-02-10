import React from "react"
import {connect} from 'react-redux'
import {Route, Redirect} from "react-router-dom"
import {getSession} from "../utils/session"

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
  }) =>  (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
)

const mapStateToProps = () => {
  const session = getSession("chat-apps")
  return {
    isAuthenticated: session ? true : false
  }
}

export default connect(mapStateToProps, undefined)(PrivateRoute)
