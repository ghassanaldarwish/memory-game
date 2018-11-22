
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (auth ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = state => {
  return {
    auth: state.auth.user
  };
};

export default connect(mapStateToProps)(PrivateRoute);