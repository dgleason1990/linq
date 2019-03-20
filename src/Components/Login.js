import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
      }

    state={
        id: '',
        username: '',
        password: ''
    }
    
    submitLogin = async ()=>{
        await this.setState({
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value
        })
        let init = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
              "content-type": "application/json"
          }
        }

        await fetch('http://localhost:8080/login', init)
        .then( data => {
            this.setState({ id: data.id });
            localStorage.setItem('token', data.token)
        })
        this.props.history.push('/Dashboard' + this.state.id)
    }
  render() {
    return (
      <div className='loginPage'>
        <form>
            <label for='username'>
                Username:
                <input ref={this.usernameRef}/>
            </label>
            <label for='passsword'>
                Password:
                <input type='password' ref={this.passwordRef}/>
            </label>
            <div onClick={this.submitLogin}> Login </div>
        </form>
      </div>
    )
  }
}
