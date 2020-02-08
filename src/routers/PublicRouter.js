import React from "react"
import {Route, Redirect} from "react-router-dom"

export const PublicRoute = ({
  isAuthenticated,
  noAuth,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      noAuth ? (
        <Component {...props} />
      ) : isAuthenticated ? (
        <Redirect to="/chat" />
      ) : (
        <Component {...props} />
      )
    }
  />
)

export default PublicRoute
