import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Genre from './Components/Genre';
import Businesses from './Components/Businesses';
import Company from './Components/Company';
import Booked from './Components/Booked';

class App extends Component {
  state={
    clientLocation:''
  }
  
  clientLocator= (data)=>{
    this.setState({
      clientLocation: data
    })
    console.log(this.state.clientLocation)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path='/' render={ ()=> <Redirect to='/home'/> }/>
            <Route path='/home' render={()=>{ return <Home clientLocator={this.clientLocator} />}}/>
            <Route exact path='/Genre' render={()=>{ return <Genre clientLocation={this.state.clientLocation} />}}/>
            <Route exact path='/Genre/:id' component={Businesses} />
            <Route exact path='/Genre/:id/:id' component={Company} />
            <Route path='/Booked' component={Booked} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
