import React, { Component } from "react";

import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import WOW from "wowjs";

class Register extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className="container">
        <h1
          style={{
            padding: "30px"
          }}
        >
          Please Register To Create Your Game
        </h1>

        <Link
          data-wow-duration="1.5s"
          to="/signin"
          className="wow bounceIn btn btn-outline-primary btn-lg btn-block "
          style={{
            height: "12vh",
            width: "35vw",
            margin: "5vh auto",
            fontSize: "35px",
            padding: "10px"
          }}
        >
          Login
        </Link>
        <Link
          data-wow-duration="1s"
          to="/signup"
          className="wow bounceIn btn btn-outline-danger btn-lg btn-block"
          style={{
            height: "12vh",
            width: "35vw",
            margin: "5vh auto",
            fontSize: "35px",
            padding: "10px"
          }}
        >
          Sign Up
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(Register));
