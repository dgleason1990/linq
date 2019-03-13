import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocationModal from './LocationModal';

export default class Home extends Component {
  state={
    isOpen: false
  }

  handleOpen=()=>{
    this.setState({
      isOpen: true
    })
    console.log(this.state)
  }

  handleClose=()=>{
    this.setState({
      isOpen: false
    })
  }
  render() {
    return (
      <div className='home'>
        <h1 className='title'> Welcome to Linq </h1>
        <p> Linq is a website that allows people to connect with beauty and health providers around Toronto!</p>
        <div className='servicesButton' onClick={this.handleOpen} > Services </div>
        <LocationModal handleClose={this.handleClose} clientLocator={this.props.clientLocator} isOpen={this.state.isOpen}/>
      </div>
    )
  }
}
