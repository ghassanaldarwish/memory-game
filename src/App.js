import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import StartGame from "./components/startGame/startgame";
import Profile from "./components/profile/profile";
import WinGame from "./components/winGame/winGame";
import LosGame from "./components/losGame/losGame";
import EditProfile from "./components/editProfile/editProfile";
import Game from "./game/game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/startGame" exact component={StartGame} />
          <Route path="/game" exact component={Game} />
          <Route path="/profile" exact component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
