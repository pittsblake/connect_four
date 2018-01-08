import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Testing from './components/Testing'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            {/* <Route 
              exact path = "/"
              component = {HomePage}
            /> */}
            {/* <Route 
              exact path = "/"
              component = {Testing}
            /> */}
            <Route
              exact path = "/"
              component = {Main}
            />
        </Switch>
      </Router>
    );
  }
}

export default App;
