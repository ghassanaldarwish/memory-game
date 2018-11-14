import React, { Component } from 'react';
import './home.css';
import homer from "../../assets/homer.jpg";

class Home extends Component {
  render() {
    return (
      <div className="Home bg-overlay container-fluid">
        <div className="m-auto">
          <h1>How good is your memory ???</h1>

          <img src={homer} alt="oh noo"/>
          <h2>Create your own interactive memory game</h2>
          <ul className="ulist">
            <li>upload your own images with just a few clicks</li>
            <li>choose the size of the game</li>
            <li>invite your friends to play</li>
          </ul>

          <p>Give it a try push START</p>
        </div>

      </div>
    );
  }
}

export default Home;
