import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import {withRouter} from 'react-router-dom';

class Modal extends Component {
    state = {
        hoursOfOperation:{
            open: 8,
            close: 12
        },
        employeeName:'',
        clientName: '',
        booking: '',
        clientPhone: '',
        address: '',
        clientEmail: ''
    }

    onSubmit = async (e)=>{
        e.preventDefault();
        let booking = document.getElementsByClassName('form-control')[0].defaultValue;
        await this.setState({
            booking: booking
        })
        let init = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                "content-type": "application/json"
            }
        }
        fetch('http://localhost:8080/booking',init)
        .then(res=>res.json());
        this.props.handleClose();
        this.props.history.push('/Booked')
    }
    render() {
        let createServiceList = this.props.services.map(arr=>{
            return <option value={ arr.service } > { arr.service } </option>
        })

        var yesterday = Datetime.moment().subtract(1, 'day');
        var valid = function( current ){
            return current.isAfter( yesterday );
        };

        return (
            <div style={{...flex, display: this.props.isOpen ? 'flex' : 'none'}}>
                <div id="form-container" style={formModal}>
                    <div className='modalClose' onClick={this.props.handleClose}>✖️</div>
                    <h1>Request an appointment</h1>
                    <form className="submissionForm">
                        {/* <div className="employeeTitle"> 
                            <p> Choose your employee </p>
                            <select onChange= { (e) => this.setState({ employeeName: e.target.value })}>
                                { createSelectList }
                            </select>
                        </div> */}
                        <div>
                            <p> Choose your service </p>
                            <select onChange= { (e) => this.setState({ service: e.target.value })}>
                                { createServiceList }
                            </select>
                        </div>
                        <div> Your Name </div>
                        <input onChange={ (e)=> this.setState({ clientName: e.target.value })}/> 
                        <div> Your Phone Number </div>
                        <input onChange={ (e)=> this.setState({ clientPhone: e.target.value })}/>
                        <div> Your Email </div>
                        <input onChange={ (e)=> this.setState({ clientEmail: e.target.value })}/>
                        <div> Address </div>
                        <input onChange={ (e)=> this.setState({ address: e.target.value })}/> 
                        <div> Select a preferred date and time </div>
                        <Datetime 
                            timeConstraints = {{
                                hours: {
                                  min: this.state.hoursOfOperation.open,
                                  max: this.state.hoursOfOperation.close,
                                  step: 1,
                                },
                                minutes: {
                                    min: 0,
                                    max: 59,
                                    step: 15
                                }
                            }}
                            isValidDate = { valid }/>
                        <div className='handleSubmission'onClick={this.onSubmit}> Submit Request </div>
                    </form>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default withRouter(Modal);

const flex = {
    padding: '25px',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: 1000,
    overflow: 'hidden',
    backgroundColor: 'rgba(57,57,57,0.6)',
};

const formModal = {
    position: 'absolute',
    color: 'rgb(57,57,57)',
    backgroundColor: '#FFFFFF',
    width: '600px',
    maxWidth: '100%',
    height: '600px',
    maxHeight: '100%',
    zIndex: 2,
    borderRadius: '3px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '5vw'
  };