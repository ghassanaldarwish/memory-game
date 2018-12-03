import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AvatarImg from "../common/avatar/avatar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import "./navigation.css";

class Navigation extends Component {
  render() {
    let navbarCheckAuth = (
      <Fragment>
        {" "}
        <li className="nav-item">
          <Link
            style={{ marginRight: "8px", color: "#fff" }}
            className="btn btn-outline-primary"
            to="/signin"
          >
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{ color: "#fff" }}
            className="btn btn-outline-danger"
            to="/signup"
          >
            Sign up
          </Link>
        </li>
      </Fragment>
    );
    if (this.props.user) {
      navbarCheckAuth = (
        <Fragment>
          <li className="nav-item">
            {" "}
            <Link className="nav-link ml-3 pr-0" to="/profile">
              {this.props.user.username}
            </Link>
          </li>
          <li className="nav-item dropdown ">
            <Link
              className="nav-link dropdown-toggle NavLinkAvatar"
              to="/profile"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <AvatarImg avatar={this.props.user.avatar} />
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <a
                href="/"
                onClick={actions.logout}
                className="dropdown-item"
                href="/"
              >
                Logout
              </a>
            </div>
          </li>
        </Fragment>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg bg-secondary navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Memory Game
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse NavigationFlexFix"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">{navbarCheckAuth}</ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(Navigation));
