import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions';
import '../css/ScoreBoard.css'

class ScoreBoard extends Component {


    componentDidUpdate(){
      // if(this.props.isCompleted){
        this.props.setHighScore(this.props.score)
      // }
    }

    render() {
        //show score board when scoreOn is true
        let showScore = this.props.scoreOn ?
          <div>
            <div className="title">{this.props.score} pt</div>
            <div className="highestScore">HS: {this.props.highScore} pt</div>
          </div> : <div className="title">MEMORY GAME</div>


        //If this.props.isStarting === true, show reset button instead of start & show generated cards
        let button = <div></div>
        let startOrReset = this.props.isStarting? <span>RESET</span> : <span>START THE GAME</span>
        if(this.props.isPageLoading === false){
          button = <button className={ this.props.isStarting ? 'gameButton--active' : 'gameButton'} onClick={this.props.startGame.bind(this)}>{startOrReset}</button>
        }

        let loadingPage= this.props.isPageLoading? <div className="loaderWrapper"><div className="loader">LOADING</div></div> : <div className="hiddenDiv"></div>

        return (
            <div className={ this.props.isStarting ? 'scoreBoard--active' : 'scoreBoard'}>
              {loadingPage}
              {showScore}
              {button}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    cards: state.game.cards,
    isStarting: state.game.isStarting,
    scoreOn: state.game.scoreOn,
    score: state.game.score,
    highScore: state.game.highestScore,
    show: state.game.show,
    isCompleted: state.game.isCompleted,
    isPageLoading: state.game.isPageLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
