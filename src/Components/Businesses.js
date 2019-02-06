import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Businesses extends Component {
  state={
    businesses:['Eyebrows','Massage Therapist', 'Wax', 'Eyelashes','Hair','Facials','Makeup']
  }
  displayBusinesses = this.state.businesses.map(arr=>{
    return( 
    <div onClick={()=>{this.props.history.push('/business/'+arr.replace(' ', ''))}}>
      {arr} 
    </div>
  )})

  render() {
     return (
      <div className='Businesses'>
        {this.displayBusinesses}
      </div>
    )
  }
}
