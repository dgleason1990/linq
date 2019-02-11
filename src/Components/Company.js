import React, { Component } from 'react';
import Modal from './Modal';

export default class Company extends Component {
    state={
        companyName: this.props.match.params.id,
        address: '',
        businessName: '',
        employee: [],
        services: [],
        id: '',
        img: '',
        summary: '',
        isOpen: false
    }

    async componentDidMount(){
        let init = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                "content-type": "application/json"
              }
        }
        await fetch('http://localhost:8080/company' , init)
        .then( res => res.json())
        .then( data => this.setState({
            address: data.address,
            businessName: data.businessName,
            employee: data.employee,
            services: data.services,
            id: data.id,
            img: data.img,
            summary: data.summary
        }))
    }

    handleClose = () => {this.setState({ 
        isOpen:false
     })}
  render(){
      let employees = this.state.employee.map(arr=>{
          return (
            <div className='employeeCard'>
                <h3> Name: {arr.name} </h3>
                <h4> Rating: {arr.rating} </h4>
                <img src={arr.img}/> 
            </div>
            )
      })
    return (
      <div className='company'>
        <h1> {this.state.businessName} </h1>
        <img src={this.state.img} />
        <h2 className='companySummary'> <span> Summary: </span> <p>{this.state.summary} </p> </h2> 
        <h2> Address: {this.state.address} </h2>
        <div className='companyModal' onClick={()=>{ this.setState({ isOpen:true })}}> Book an Appointment </div>
        <h2> Employees </h2>
        {employees}
        <Modal employeeInfo = {this.state.employee} services={this.state.services} isOpen={this.state.isOpen} handleClose={this.handleClose}/>    
      </div>
    )
  }
}
