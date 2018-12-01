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
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
// import Spinner from "../common/spinner/spinner";
// import Images from './Images';
// import Buttons from './Buttons';
import UploadImageForm from "./uploadImageForm";
import ip from "ip";
import Spinner from "../common/spinner/spinner";
import WOW from "wowjs";
import "./startGame.css";
import Register from "../register/register";

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
    loading: false,
    imgData: [
      {
        name: "image1",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image2",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image3",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image4",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image5",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image6",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image7",
        filedata: null,
        imgUrl: null
      },
      {
        name: "image8",
        filedata: null,
        imgUrl: null
      }
    ]
  };

  onSubmitHandler = e => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("gameImgs", this.state.imgData);
    this.state.imgData.map(item => {
      formData.append("gameImgs", item.filedata);
    });

    this.setState({ loading: true });
    // send data to BE
    axios({
      url:
        "https://memory-game-7.herokuapp.com/game/game-data/" +
        this.props.user.id,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    })
      .then(res => {
        this.setState({ loading: false });
        // this.props.onImgsData(imgsData.data)
        console.log("data from backend", res.data);
        this.props.onImgsData(res.data);
      })
      .catch(e => {
        console.log(e);
        this.setState({ loading: false });
        this.props.history.push("/startGame");
      });
    console.log("imgs file submited", this.state.imgData);
  };

  onChangeHandler = e => {
    console.log("Change Handler");
    const updateState = {
      ...this.state,
      imgData: [...this.state.imgData]
    };
    const newimgData = updateState.imgData.map(item => {
      if (item.name === e.target.name) {
        item.filedata = e.target.files[0];
        item.imgUrl = URL.createObjectURL(e.target.files[0]);
      }
    });
    this.setState({ imgData: updateState.imgData });
    console.log(updateState);
    console.log({
      [e.target.name]: e.target.files[0]
    });
  };

  render() {
    const checkArrayLength = this.state.imgData.filter(
      item => item.filedata !== null
    ).length;
    console.log(this.state.imgData);
    let uploadButtonStyle = "btn btn-outline-secondary";
    if (checkArrayLength === 8) {
      const wow = new WOW.WOW();

      wow.init();
      uploadButtonStyle = "wow bounceIn btn btn-success";
    }
    return this.props.user ? (
      this.state.loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1
            style={{
              padding: "30px"
            }}
          >
            Upload Your Custom Image
          </h1>
          <form
            onSubmit={this.onSubmitHandler}
            className="container"
            style={{
              marginTop: 25
            }}
            encType="multipart/form-data"
          >
            <UploadImageForm
              onChange={this.onChangeHandler}
              imgData={this.state.imgData}
            />
            <button
              style={{
                height: "10vh",
                width: "30vw",
                margin: "5vh auto",
                fontSize: "35px",
                padding: "10px"
              }}
              data-wow-duration="3s"
              className={uploadButtonStyle}
              disabled={checkArrayLength !== 8}
              type="submit"
            >
              {checkArrayLength !== 8
                ? "Please Select " + (8 - checkArrayLength) + " Images"
                : "UPLOAD"}
            </button>
          </form>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <Fragment>
              {!this.props.gameImgsData ? null : (
                <div
                  className="container mt-5 mb-5"
                  style={{
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "10px"
                  }}
                >
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        {this.props.gameImgsData.imgsGame.map(items => (
                          <div
                            style={{ width: "150px", height: "150px" }}
                            className="col-3 mb-3"
                            key={items._id}
                          >
                            <div class="card">
                              <img
                                style={{ height: "100%" }}
                                className="card-img-top"
                                src={items.img}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="row" style={{ height: "50%" }}>
                        <div className="col">
                          <label for="exampleInputEmail1">
                            <i class="fas fa-share-alt" /> Share The link:
                          </label>
                          <textarea
                            style={{
                              width: "100%",
                              wordBreak: "break-word"
                            }}
                            type=""
                            value={` http://${ip.address()}:3000/game-custom/${
                              this.props.gameImgsData.user
                            }`}
                            readonly
                          />
                        </div>
                      </div>
                      <div style={{ height: "50%" }} className="row">
                        <div className="col">
                          <Link
                            to={`/game-custom/${this.props.gameImgsData.user}`}
                            type="button"
                            className="wow zoomIn btn btn-outline-primary btn-lg btn-block "
                            style={{
                              height: "12vh",
                              width: "100%",
                              margin: "5vh auto",
                              fontSize: "35px",
                              padding: "10px"
                            }}
                          >
                            PLAY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          )}
        </div>
      )
    ) : (
      <Register />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  gameImgsData: state.gameImgsData.gameImgsData,
  loading: state.gameImgsData.loading
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(StartGame));
