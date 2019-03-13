import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    return (
      <div className='users'>
        <h1> Interested in joining the team? </h1>
        <h2> Contact us here! </h2>
        <form>
            <label for='name'> Name: </label>
            <input/> 
            <label for='email'> Email: </label>
            <input/>
            <label for='phone number'> Phone Number: </label>
            <input/>
            <label> Message for linq </label>
            <textarea/>
            <div> Submit </div>
        </form>
      </div>
    )
  }
}
