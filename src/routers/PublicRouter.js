import React from "react"
import {connect} from 'react-redux'
import {Route, Redirect} from "react-router-dom"
import {getSession} from "../utils/session"

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect to="/chat" />
      ) : (
        <Component {...props} />
      )
    }
  />
)

const mapStateToProps = () => {
  const session = getSession("chat-apps")
  return {
    isAuthenticated: session ? true : false
  }
}

export default connect(mapStateToProps, undefined)(PublicRoute)
