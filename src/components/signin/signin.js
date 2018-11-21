import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import InputFiled from "../common/input/input";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import "./signin.css";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.login(
      {
        email: this.state.email,
        password: this.state.password
      },
      this.props.history
    );
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { classes, errors } = this.props;
    let signinError = null;
    if (errors) {
      signinError = signinError = (
        <div class="alert alert-danger" role="alert">
          Email Or Password Is Invalid
        </div>
      );
    }
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign in</Typography>
            {signinError}
            <form className={classes.form} onSubmit={this.onSubmitHandler}>
              <InputFiled
                value={this.state.email}
                name="email"
                fullWidth
                type="email"
                label="Email"
                required
                onChange={this.onChangeHandler}
              />
              <InputFiled
                value={this.state.password}
                name="password"
                fullWidth
                type="password"
                label="Password"
                required
                onChange={this.onChangeHandler}
              />
              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "block",
                  width: "100%"
                }}
              >
                <Button
                  type="submit"
                  fullWidth
                  className={classes.submit}
                  variant="contained"
                  color="primary"
                >
                  Sign in
                </Button>
              </button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(styles)(Signin)));
