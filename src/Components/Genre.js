import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Businesses extends Component {
  state={
    genre:['Eyebrows','Massage Therapist', 'Wax', 'Eyelashes','Hair','Facials','Makeup']
  }
 
  render() {
    let displayGenre = this.state.genre.map(arr=>{
        return( 
        <div className='genreList' onClick={ ()=>{ this.props.history.push('/Genre/' + arr.split(' ').join(''))} }>
          {arr} 
        </div>
      )})
     return (
      <div className='genre'>
        { displayGenre }
      </div>
    )
  }
}
