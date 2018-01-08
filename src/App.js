import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Testing from './components/Testing'
import ReactRedux from './components/ReactRedux'
import Fresh from './components/Fresh'
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
            {/* <Route
              exact path = "/2"
              component = {ReactRedux}
            /> */}
            <Route
              exact path = "/"
              component = {Fresh}
            />
        </Switch>
      </Router>
    );
  }
}

export default App;
