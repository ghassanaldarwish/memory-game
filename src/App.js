import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import StartGame from './components/startGame/startgame';
import Profile from './components/profile/profile';
import WinGame from './components/winGame/winGame';
import LosGame from './components/losGame/losGame';
import EditProfile from './components/editProfile/editProfile';
import Game from './game/game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <Signin/>
        <Signup/>
        <StartGame/>
        <Game />
        <Profile/>
        <WinGame />
        <LosGame />
        <EditProfile />

      </div>
    );
  }
}

export default App;
