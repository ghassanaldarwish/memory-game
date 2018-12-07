// import React, { Component } from "react";
import "./profile.css";
import homer from "../../assets/homer.jpg";

import React, { Component, Fragment } from "react";

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
import * as actions from "../../store/actions";
import axios from "axios";
import Spinner from "../common/spinner/spinner";

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
    avatarImgFile: "",
    loading: false
  };

  onChangeHandler = e => {
    this.setState({ avatarImgFile: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  onSubmitHandler = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatar", this.state.avatarImgFile);
    this.setState({ loading: true });
    axios({
      url:
        /*"https://memory-game-7.herokuapp.com*/"/user/avatar/" + this.props.user.id,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    })
      .then(user => {
        this.setState({ loading: false });
        this.props.currentUser(user.data);
        this.props.logout();
        this.props.history.push("/signin");
      })
      .catch(e => {
        this.setState({ loading: false });
        this.props.history.push("/profile");
      });
  };
  render() {
    const { classes } = this.props;

    console.log(this.props.user && this.props.user.username);
    return (
      <div className="wrapper">
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h2>Hello {this.props.user && this.props.user.username}</h2>
            <div className="center-content mb-5">
              <div className={classes.row}>
                {this.props.user && (
                  <Avatar
                    alt="homi"
                    src={this.props.user.avatar}
                    className={classes.bigAvatar}
                  />
                )}
              </div>
              {this.props.user && (
                <form onSubmit={this.onSubmitHandler} className="mt-5">
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
          </Fragment>
        )}
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
