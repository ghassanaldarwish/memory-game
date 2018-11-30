import React, { Component } from "react";
import GameBoard from "./containers/GameBoard";
import ScoreBoard from "./containers/ScoreBoard";
import "./css/App.css";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAxiosAuth from "../setAxiosAuthHeader";
import * as actions from "../store/actions";
import store from "../store";

class Game extends Component {
  componentDidMount() {
    if (localStorage.getItem("tokenMemory")) {
      const token = localStorage.getItem("tokenMemory");
      setAxiosAuth(token);
      const userDecoded = jwt_decode(token);
      store.dispatch(actions.currentUser(userDecoded));
    }
  }
  render() {
    return (
      <div className="App">
        <ScoreBoard gameId={this.props.match.params.id} />
        <GameBoard gameId={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(Game);
