import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Businesses extends Component {
  state={
    genre:['Eyebrows','Massage Therapist', 'Wax', 'Eyelashes','Hair','Facials','Makeup']
  }
 
  render() {
    let displayGenre = this.state.genre.map(arr=>{
        return( 
        <div onClick={ ()=>{ this.props.history.push('/Genre/' + arr.split(' ').join(''))} }>
          {arr} 
        </div>
      )})
     return (
      <div className='Genre'>
        {displayGenre}
      </div>
    )
  }
}
