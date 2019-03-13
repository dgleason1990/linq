import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className='navBar'>
        <Link to='/home'>
            Home
        </Link>
        <Link to='/Users'>
            Join the Linq Team
        </Link>
      </div>
    )
  }
}
