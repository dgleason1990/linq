import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <h1> Welcome to Linq </h1>
        <p> Linq is a website that allows people to connect with beauty and health providers around Toronto!</p>
        <Link to='/businesses'>Click here to find your business! </Link>
      </div>
    )
  }
}
