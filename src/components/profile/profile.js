// import React, { Component } from "react";
import "./profile.css";
import homer from "../../assets/homer.jpg";

import React, { Component } from "react";

// import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import setAxiosAuth from "../../setAxiosAuthHeader";
import * as actions from "../../store/actions";
import axios from "axios";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 120,
    height: 120
  }
};

class ProfilePicture extends Component {
  state = {
    avatarImgFile: ""
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      setAxiosAuth(token);
      const userDecoded = jwt_decode(token);
      if (userDecoded) {
        this.props.currentUser(userDecoded);
      }
    }
  }
  onChangeHandler = e => {
    this.setState({ avatarImgFile: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  onSubmitHandler = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatar", this.state.avatarImgFile);
    console.log(
      "fileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      this.state.avatarImgFile
    );
    console.log("user idddddddddddddddddddddddddddddd", this.props.user.id);
    axios({
      url:
        "https://memory-game-7.herokuapp.com/user/avatar/" + this.props.user.id,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    }).then(user => {
      this.props.currentUser(user.data);
      this.props.logout();
      this.props.history.push("/signin");
    });
  };
  render() {
    const { classes } = this.props;

    console.log(this.props.user && this.props.user.username);
    return (
      <div className="wrapper">
        <h2>Hello {this.props.user && this.props.user.username}</h2>
        <div className="center-content">
          <div className={classes.row}>
            {this.props.user && (
              <Avatar
                alt="homi"
                src={this.props.user.avatar}
                className={classes.bigAvatar}
              />
            )}
          </div>
          <div className="margin">
            <div className={classes.row}>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  You want to change your username?
                </InputLabel>
                <Input
                  className="avatarTest"
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              {/* <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        /> */}
            </div>
          </div>
          {this.props.user && (
            <form onSubmit={this.onSubmitHandler}>
              <input
                onChange={this.onChangeHandler}
                name="avatar"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />

              <button type="submit" color="primary">
                UPLOAD
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ProfilePicture));
