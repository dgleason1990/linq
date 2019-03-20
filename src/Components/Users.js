import React, { Component } from 'react'

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneNumberRef = React.createRef();
    this.messageRef = React.createRef();
  }
  state={
    name:'',
    email:'',
    phoneNumber:'',
    message: ''
  }
  submitForm = async ()=>{
    await this.setState({
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phoneNumber: this.phoneNumberRef.current.value,
      message: this.messageRef.current.value
    });
    let init = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers:{
        "content-type": "application/json"
    }
    }
    fetch('http://localhost:8080/users', init)
    .then(data => console.log(data))
  }
  render() {
    return (
      <div className='users'>
        <h1> Interested in joining the team? </h1>
        <h2> Contact us here! </h2>
        <form>
            <label for='name'> Name: </label>
            <input ref={this.nameRef}/> 
            <label for='email'> Email: </label>
            <input ref={this.emailRef} />
            <label for='phone number'> Phone Number: </label>
            <input ref={this.phoneNumberRef}/>
            <label> Message for linq </label>
            <textarea ref={this.messageRef}/>
            <div onClick={this.submitForm}> Submit </div>
        </form>
      </div>
    )
  }
}
