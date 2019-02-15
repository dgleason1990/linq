import React, { Component } from 'react';
import Businesses from './Businesses';
import GoogleMaps from './GoogleMaps';

export default class Genre extends Component {
  state={
    clientLocation: this.props.clientLocation,
    genre:['Eyebrows','Massage Therapist', 'Wax', 'Eyelashes','Hair','Facials','Makeup'],
    genreSelected:'',
    genreInfo:[{
      address: '',
      businessName:'',
      img: '',
      id:'',
      location: {
        coordinates:[{
          $numberDecimal: 40.7128
        },
        {
          $numberDecimal: 74.0060
        }]
      }
    }],
  }

  render() {
      let displayGenre2 = this.state.genre.map(arr=>{
        return( 
        <div className='genreList' onClick={ async ()=>{ 
          let genre = arr.split(' ').join('');
          let init = {
            method:'POST',
            body: JSON.stringify({ genre: genre }),
            headers:{
              "content-type": "application/json"
            }
          }
        await fetch('http://localhost:8080/businesses', init)
        .then( res => res.json())
        .then( data => this.setState({
                genreSelected: genre, 
                genreInfo: data
            })
        )
        .catch( err => console.log(err) )
          }}>
          {arr} 
        </div>
      )})
     return (
      <div className='genre'>
        <div>
          { displayGenre2 }
        </div>
        <GoogleMaps genreInfo={this.state.genreInfo} clientLocation={this.state.clientLocation} genreSelected={this.state.genreSelected}/>
      </div>
    )
  }
}
