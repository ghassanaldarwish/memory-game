

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
import UploadImageForm from './uploadImageForm'

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

  onSubmit = e => {
    e.preventDefault();
    const files = Array.from(e.target.elements.gameImgs.files)
    console.log(files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {

      formData.append('gameImgs', file)
    })

    fetch(`/game/game-data/${this.props.user.id}`, {
      method: 'POST',
      body: formData
    })
    .then(images => {
      this.setState({
        uploading: false,
        images: []
      });
    })
  }


  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => id !== id)
    })
  }

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({
      images: files.map(file => {
        return URL.createObjectURL(file)
      })
    })
  }

  render() {

    const { uploading, images } = this.state
    return (
      <div>
        <div className='buttons'>
          {uploading
            ? <Spinner />
            : <Fragment>
              <UploadImageForm />
              <UploadImageForm />
              <UploadImageForm />
              <UploadImageForm />
              <UploadImageForm />
            </Fragment>}
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




//
// <Fragment>
//                 <Buttons onSubmit={this.onSubmit} onChange={this.onChange} />
//                 <Images images={images} removeImage={this.removeImage} />
//               </Fragment>
