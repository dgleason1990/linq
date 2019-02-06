import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Businesses from './Components/Businesses';
import Business from './Components/Business';
// import Eyebrows from './Components/Genre/Eyebrows';
// import Eyelashes from './Components/Genre/Eyelashes';
// import Facial from './Components/Genre/Facial';
// import Makeup from './Components/Genre/Makeup';
// import Rmt from './Components/Genre/Rmt';
// import Wax from './Components/Genre/Wax';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/businesses' component={Businesses} />
              <Route path='/business/:id' component={Business} />
              {/* <Route path='/eyebrows' component={Eyebrows}/>
              <Route path='/eyelashes' component={Eyelashes} />
              <Route path='/facial' component={Facial} />
              <Route path='/makeup' component={Makeup}/>
              <Route path='/rmt' component={Rmt}/>
              <Route path='/wax' component={Wax}/> */}
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
