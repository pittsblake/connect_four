import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route
              exact path = "/"
              component = {Board}
            />
        </Switch>
      </Router>
    );
  }
}

export default App;
