

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
import Images from './Images';
import Buttons from './Buttons';
// import { API_URL } from './config';
import "./startGame.css";

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

class StartGame extends Component {

  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append('gameImgs', file)
    })

    console.log(e.target.files);

    fetch(`/game/game-data/${this.props.user.id}`, {
      method: 'POST',
      body: formData
    })

    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false,
        images
      })
    })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    console.log(this.props.user)
    const { uploading, images } = this.state

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div>
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(StartGame));
