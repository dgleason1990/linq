import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Genre from './Components/Genre';
import Businesses from './Components/Businesses';
import Company from './Components/Company';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
            <Switch>
              <Route exact path='/' render={()=> <Redirect to='/home'/> }/>
              <Route path='/home' component={Home} />
              <Route exact path='/Genre' component={Genre} />
              <Route exact path='/Genre/:id' component={Businesses} />
              <Route exact path='/Genre/:id/:id' component={Company} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
