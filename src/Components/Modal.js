import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';

class Modal extends Component {
    constructor(){
        super();
        this.titleRef = React.createRef()
    }

    state = {
        employeeName:'',
        clientName: '',
        booking: ''
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
        .then(res=>res.json())
    }
    render() {
        let createSelectList = this.props.employeeInfo.map(arr=>{
            return <option value={arr.name} > { arr.name } </option>
        })
        return (
            <div style={{...flex, display: this.props.isOpen ? 'flex' : 'none'}}>
                <div className="form-container" style={formModal}>
                    <h1>Request an appointment</h1>
                    <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}> X <br/> Close</div>
                    <form className="submissionForm">
                        <div className="employeeTitle"> 
                            <p> Choose your employee </p>
                            <select onChange= { (e) => this.setState({ employeeName: e.target.value })}>
                                { createSelectList }
                            </select>
                        </div>
                        <h3>Your Name: <input onChange={ (e)=> this.setState({ clientName: e.target.value })}/> </h3>
                        <Datetime />
                        <button onClick={this.onSubmit}> Submit Request </button>
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

export default Modal;

const flex = {
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

const modalLayer = {
    position: 'relative',
    top: '-77px',
    left: '450px',
    zIndex: 1,
    backgroundColor: 'transparent'
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