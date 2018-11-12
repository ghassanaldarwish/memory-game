
import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Hello from './hello';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>

            <main>
              <Switch>
                <Route exact path="/" component={Hello} />
                <Route exact path="/game" component={Game}/>

              </Switch>
            </main>

          </Fragment>
        </BrowserRouter>

    );
  }
}

export default App;
