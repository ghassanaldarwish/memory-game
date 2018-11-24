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
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/startGame">
            Start Game
          </Link>
        </li>
      </Fragment>
    );
    if (this.props.user) {
      navbarCheckAuth = (
        <Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/startGame">
              Start Game
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
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {navbarCheckAuth}
            </ul>
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
