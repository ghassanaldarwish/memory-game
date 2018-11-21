import React, { Component } from 'react';
import { GameBoard, ScoreBoard } from './containers'
import './css/App.css';

class Game extends Component {


  render() {

    return (
      <div className="App">
       
        <ScoreBoard/>
        <GameBoard/>
      
      </div>
    );
  }
}

export default Game;
