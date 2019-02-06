import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
            <Switch>
              <Route path='/home' component={Home} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
