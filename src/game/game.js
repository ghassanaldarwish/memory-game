import React, { Component } from "react";
import GameBoard from "./containers/GameBoard";
import ScoreBoard from "./containers/ScoreBoard";
import "./css/App.css";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAxiosAuth from "../setAxiosAuthHeader";
import * as actions from "../store/actions";
import store from "../store";
import { connect } from "react-redux";
import WOW from "wowjs";

class Game extends Component {
  componentDidMount() {
    if (this.props.gameData) {
      store.dispatch(
        actions.onGameImgsData(Number(this.props.gameData.gamesize))
      );
      console.log(
        Number(this.props.gameData.gamesize),
        "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
      );
    }

    const wow = new WOW.WOW();
    wow.init();
    if (localStorage.getItem("tokenMemory")) {
      const token = localStorage.getItem("tokenMemory");
      setAxiosAuth(token);
      const userDecoded = jwt_decode(token);
      store.dispatch(actions.currentUser(userDecoded));
    }
  }
  render() {
    return (
      <div
        className=" App"
        style={{
          background:
            'url("https://i.pinimg.com/originals/ff/c9/69/ffc969925625c3156af6bd6ffd9a6267.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "91.5vh"
        }}
      >
        <ScoreBoard gameId={this.props.match.params.id} />
        <GameBoard gameId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameData: state.gameImgsData.gameImgsData
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(Game));
