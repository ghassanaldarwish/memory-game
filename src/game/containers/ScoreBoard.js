import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import "../css/ScoreBoard.css";
import music from "../../assets/game.mp3";
import winSound from "../../assets/winSound.wav";
import ReactAudioPlayer from "react-audio-player";

class ScoreBoard extends Component {
  componentDidUpdate() {
    // if(this.props.isCompleted){
    this.props.setHighScore(this.props.score);
    // }
  }

  render() {
    console.log("woooooooooooow", this.props);
    //show score board when scoreOn is true
    let showScore = this.props.scoreOn ? (
      <div>
        {this.props.match.params.name && (
          <span className="h6">
            The Game created By: {this.props.match.params.name}
          </span>
        )}
        <div className="title">{this.props.score} pt</div>
        <div className="highestScore">HS: {this.props.highScore} pt</div>
      </div>
    ) : (
      <div className="title">MEMORY GAME</div>
    );

    //If this.props.isStarting === true, show reset button instead of start & show generated cards
    let button = <div />;
    let startOrReset = this.props.isStarting ? (
      <span>RESET</span>
    ) : (
      <span>START THE GAME</span>
    );
    if (this.props.isPageLoading === false) {
      button = (
        <button
          className={
            this.props.isStarting ? "gameButton--active" : "gameButton"
          }
          onClick={
            this.props.gameId
              ? this.props.startCustomGame.bind(this, this.props.gameId)
              : this.props.startGame.bind(this)
          }
        >
          {startOrReset}
        </button>
      );
    }

    let loadingPage = this.props.isPageLoading ? (
      <div className="loaderWrapper">
        <div className="loader">LOADING</div>
      </div>
    ) : (
      <div className="hiddenDiv" />
    );

    return (
      <Fragment>
        {this.props.isCompleted && <ReactAudioPlayer src={winSound} autoPlay />}
        {/* {this.props.cards.length > 0 && !this.props.isCompleted && (
          <ReactAudioPlayer src={music} autoPlay loop volume={0.6} />
        )} */}

        <div
          className={
            this.props.isStarting ? "scoreBoard--active" : "scoreBoard"
          }
        >
          {loadingPage}
          {showScore}
          {button}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.game.cards,
    isStarting: state.game.isStarting,
    scoreOn: state.game.scoreOn,
    score: state.game.score,
    highScore: state.game.highestScore,
    show: state.game.show,
    isCompleted: state.game.isCompleted,
    isPageLoading: state.game.isPageLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ScoreBoard));
