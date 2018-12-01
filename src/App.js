import React, { Component, Fragment } from "react";
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
import jwt_decode from "jwt-decode";
import setAxiosAuth from "./setAxiosAuthHeader";
import * as actions from "./store/actions";
import store from "./store";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Register from "./components/register/register";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("tokenMemory")) {
      const token = localStorage.getItem("tokenMemory");
      setAxiosAuth(token);
      const userDecoded = jwt_decode(token);
      store.dispatch(actions.currentUser(userDecoded));
      store.dispatch(actions.getCurrentGame(userDecoded.id));
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={80} classNames="fade">
                <Fragment>
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/startGame" exact component={StartGame} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/game" exact component={Game} />
                    <Route path="/game-custom/:id" exact component={Game} />
                    <PrivateRoute path="/profile" exact component={Profile} />
                    <Redirect to="/" />
                  </Switch>
                </Fragment>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
