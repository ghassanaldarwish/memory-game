import React, { Component, Fragment } from "react";

// import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";

// import AccountCircle from "@material-ui/icons/AccountCircle";
// import IconButton from "@material-ui/core/IconButton";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
// import Spinner from "../common/spinner/spinner";
// import Images from './Images';
// import Buttons from './Buttons';
import UploadImageForm from "./uploadImageForm";
// import ip from "ip";
import Spinner from "../common/spinner/spinner";
import WOW from "wowjs";
import "./startGame.css";
import Register from "../register/register";
import "clipboard-copy-element";
import createGameMusic from "../../assets/createGame.mp3";
import ReactAudioPlayer from "react-audio-player";

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
    email: "",
    loading: false,
    gamesize: 3,
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
      }
    ]
  };
  componentWillMount() {
    if (this.props.user) {
      actions.getCurrentGame(this.props.user.id);
    }
  }
  onClickHandler = e => {
    let newImageData = {
      ...this.state,
      gamesize: this.state.imgData.length,
      imgData: [...this.state.imgData]
    };
    newImageData.imgData.push({
      name: "image" + (this.state.imgData.length + 1),
      filedata: null,
      imgUrl: null
    });
    console.log("new State", newImageData.imgData);
    this.setState({
      imgData: newImageData.imgData
    });

    console.log(this.state.imgData.length);
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
        //  "http://localhost:5000/game/game-data/" +
        this.props.user.id +
        "/" +
        this.state.imgData.length,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    })
      .then(res => {
        this.setState({ loading: false });
        // this.props.onImgsData(imgsData.data)
        console.log("data from backend LoLLLLLLLLLLLLLLLLL", res.data);
        this.props.onImgsData(res.data);

        this.setState({
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
            }
          ]
        });
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
  onClickHandlerMore = e => {
    let newImageData = {
      ...this.state,
      imgData: [...this.state.imgData]
    };
    newImageData.imgData.push({
      name: "image" + (this.state.imgData.length + 1),
      filedata: null,
      imgUrl: null
    });
    console.log("new State", newImageData.imgData);
    this.setState({
      imgData: newImageData.imgData
    });

    console.log(this.state.imgData.length);
  };
  onClickHandlerLess = () => {
    let newImageData = {
      ...this.state,
      imgData: [...this.state.imgData]
    };
    newImageData.imgData.pop();
    console.log("new State", newImageData.imgData);
    this.setState({
      imgData: newImageData.imgData
    });

    console.log(this.state.imgData.length);
  };

  onSubmitEmailHandler = e => {
    e.preventDefault();
    console.log(" the game sent to: ", this.state.email);
  };

  render() {
    console.log("real new state", this.state.imgData, this.state);
    const checkArrayLength = this.state.imgData.filter(
      item => item.filedata !== null
    ).length;
    const checkArrayLength1 = this.state.imgData.length;
    // console.log(this.state.imgData);
    let uploadButtonStyle = "btn btn-outline-secondary";

    let uploadIconStyleR = "fas fa-arrow-right";
    let uploadIconStyleL = "fas fa-arrow-left";
    if (checkArrayLength === this.state.imgData.length) {
      const wow = new WOW.WOW();

      wow.init();
      uploadButtonStyle = "wow bounceIn btn btn-success";
      uploadIconStyleR = "wow bounceIn fas fa-arrow-right";
      uploadIconStyleL = "wow bounceIn fas fa-arrow-left";
    }
    return this.props.user ? (
      this.state.loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <ReactAudioPlayer src={createGameMusic} autoPlay loop volume={0.6} />
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
                            <i class="fas fa-share-alt" /> Share The Game With
                            Your Friends 🤖:
                          </label>
                          <button
                            type="button"
                            class="btn btn-primary mb-3"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            <i class="fas fa-at mr-1" /> Share By Email
                          </button>

                          <div
                            class="modal fade"
                            id="exampleModalCenter"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalCenterTitle"
                                  >
                                    Share With Frinds By Email
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form onSubmit={this.onSubmitEmailHandler}>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Email address
                                      </label>
                                      <input
                                        onChange={e =>
                                          this.setState({
                                            email: e.target.value
                                          })
                                        }
                                        name="email"
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                      />
                                      <small
                                        id="emailHelp"
                                        class="form-text text-muted"
                                      >
                                        please typing a valid email address
                                      </small>
                                    </div>
                                    <button
                                      type="submit"
                                      class="btn btn-primary"
                                    >
                                      send
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <textarea
                            style={{
                              height: "89px",
                              width: "100%",
                              wordBreak: "break-word",
                              resize: "none"
                            }}
                            id="blob-path"
                            value={`https://customise-memory-game.herokuapp.com/game-custom/${
                              this.props.user.username
                            }/${this.props.gameImgsData.user}`}
                            disabled
                          />
                          <clipboard-copy
                            style={{
                              position: "absolute",
                              right: "35px"
                            }}
                            for="blob-path"
                            class="btn btn-outline-info "
                          >
                            <i class="far fa-copy" />
                            Copy
                          </clipboard-copy>
                          <textarea
                            style={{
                              height: "80px",
                              width: "100%",
                              wordBreak: "break-word",
                              resize: "none"
                            }}
                            id="blob-path2"
                            value={`https://memory-game-a17c2.firebaseapp.com/game-custom/${
                              this.props.user.username
                            }/${this.props.gameImgsData.user}`}
                            disabled
                          />
                          <clipboard-copy
                            style={{
                              position: "absolute",
                              right: "35px"
                            }}
                            for="blob-path2"
                            class="btn btn-outline-danger "
                          >
                            <i class="far fa-copy" />
                            Copy
                          </clipboard-copy>
                        </div>
                      </div>
                      <div style={{ height: "50%" }} className="row">
                        <div className="col">
                          <Link
                            to={`/game-custom/${this.props.user.username}/${
                              this.props.gameImgsData.user
                            }`}
                            className="wow zoomIn btn btn-outline-danger btn-lg btn-block "
                            style={{
                              height: "12vh",
                              width: "100%",
                              margin: "5vh auto",
                              fontSize: "35px",
                              padding: "10px"
                            }}
                          >
                            PLAY NOW
                            <i
                              class="fas fa-play ml-3 "
                              style={{ color: "#6E4A84" }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          )}
          <h1
            style={{
              padding: "30px"
            }}
          >
            Upload Your Custom Images
          </h1>
          <button
            type="button"
            onClick={this.onClickHandlerMore}
            class="btn btn-success mr-3"
            disabled={this.state.imgData.length === 8}
          >
            {" "}
            + more images
          </button>
          <button
            type="button"
            onClick={this.onClickHandlerLess}
            class="btn btn-danger"
            disabled={this.state.imgData.length === 3}
          >
            - less images
          </button>
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
            {checkArrayLength === this.state.imgData.length && (
              <i
                data-wow-duration="5s"
                class={uploadIconStyleR}
                style={{
                  fontSize: "45px",
                  padding: "0 15px",
                  color: "blue"
                }}
              />
            )}
            <button
              style={{
                height: "10vh",
                width: "35vw",
                margin: "5vh auto",
                fontSize: "35px",
                padding: "10px"
              }}
              data-wow-duration="3s"
              className={uploadButtonStyle}
              disabled={checkArrayLength !== this.state.imgData.length}
              type="submit"
            >
              {checkArrayLength !== this.state.imgData.length ? (
                "Please Select " +
                (this.state.imgData.length - checkArrayLength) +
                " Images"
              ) : (
                <Fragment>
                  <i class="fas fa-upload" /> UPLOAD
                </Fragment>
              )}
            </button>
            {checkArrayLength === this.state.imgData.length && (
              <i
                data-wow-duration="5s"
                class={uploadIconStyleL}
                style={{
                  fontSize: "45px",
                  padding: "0 15px",
                  color: "blue"
                }}
              />
            )}
          </form>
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
  loading: state.gameImgsData.loading,
  gamesize: state.gamesize
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(StartGame));
