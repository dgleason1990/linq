import React, { Component } from 'react';
import Modal from './Modal';

export default class SideBar extends Component {
    state={
        isLoading: this.props.companyInfo.isLoaded,
        companyName: this.props.companyInfo.businessName,
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

    displaySummary = () => {
        if(document.getElementById('summaryDisplay').innerHTML === ''){
            document.getElementById('summaryDisplay').innerHTML = this.state.summary
        } else document.getElementById('summaryDisplay').innerHTML = ''
    }

    handleClose = ()=>{
        this.setState({
            isOpen: false
        })
    }

    handleOpen=()=>{
        this.setState({
            isOpen: true
        })
    }
  render() {
    return (
      <div className='googleInfo'>
        <img src={this.state.img}/>
        <h1> {this.state.businessName} </h1>
        <h2> {this.state.address} </h2>
        <div className='summaryToggle' onClick={this.displaySummary}> Learn more about {this.state.businessName} </div>
        <h3 id='summaryDisplay'></h3>
        <div onClick={this.handleOpen} className='bookNow'> Book Now </div>
        <Modal employeeInfo={this.state.employee} services={this.state.services} isOpen={this.state.isOpen} handleClose={this.handleClose} />
      </div>
    )
  }
}
