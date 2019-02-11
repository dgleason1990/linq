import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    state={
        address:''
    }

    onSubmit = async (e)=>{
        e.preventDefault();
        console.log(this.state)
        let init = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                "content-type": "application/json"
            }
        }
        fetch('http://localhost:8080/location',init)
        .then(res=>res.json())
    }
    render() {
        return (
            <div style={{...flex, display: this.props.isOpen ? 'flex' : 'none'}}>
                <div id="form-container" style={formModal}>
                    <div className='modalClose' onClick={this.props.handleClose}>✖️</div>
                    <h1>Where are you located?</h1>
                    <form className="submissionForm">
                        <div>Address: </div>
                        <input onChange={ (e)=> this.setState({ address: e.target.value })}/> 
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

export default Modal;

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