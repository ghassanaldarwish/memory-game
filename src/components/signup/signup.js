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
import "./signup.css";

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

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.signup(
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      },
      this.props.history
    );
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { classes, errors } = this.props;
    console.log(errors);
    let errorUsername = null
    let errorEmail = null
    let errorPassword = null
    let errorConfirmPassword = null
    if (errors) {
      if(errors.find(o => o.param === "username")){
          errorUsername = 
          <div class="alert alert-danger" role="alert">
            {errors.find(o => o.param === "username").msg}
          </div>
        
      }
      if(errors.find(o => o.param === "email")){
         errorEmail = 
          <div class="alert alert-danger" role="alert">
            {errors.find(o => o.param === "email").msg}
          </div>
        
      }
      if(errors.find(o => o.param === "password")){
         errorPassword = 
          <div class="alert alert-danger" role="alert">
            {errors.find(o => o.param === "password").msg}
          </div>
        
      }
      if(errors.find(o => o.param === "confirmPassword")){
         errorConfirmPassword = 
          <div class="alert alert-danger" role="alert">
            {errors.find(
          o => o.param === "confirmPassword"
        ).msg}
          </div>
        
      }
    
    }
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign up</Typography>

            <form className={classes.form} onSubmit={this.onSubmitHandler}>
              <InputFiled
                onChange={this.onChangeHandler}
                name="username"
                value={this.state.username}
                fullWidth
                label="User Name"
                required
               
              />
              {errorUsername }
              <InputFiled
                onChange={this.onChangeHandler}
                name="email"
                value={this.state.email}
                fullWidth
                type="email"
                label="Email"
                required
              />
               {errorEmail }

              <InputFiled
                onChange={this.onChangeHandler}
                name="password"
                value={this.state.password}
                fullWidth
                type="password"
                label="Password"
                required
              />
               {errorPassword }

              <InputFiled
                onChange={this.onChangeHandler}
                value={this.state.confirmPassword}
                name="confirmPassword"
                fullWidth
                type="password"
                label="Confirm Password"
                required
              />
               {errorConfirmPassword }

              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "block",
                  width: "100%"
                }}
              >
                <Button
                  fullWidth
                  className={classes.submit}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Sign up
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
)(withRouter(withStyles(styles)(Signup)));
