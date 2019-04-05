import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
      }

    state = {
        id: '',
        username: '',
        password: '',
        userType: ''
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
        .then(res => res.json())
        .then( async data => {
            if( data.token !== undefined ){
                localStorage.setItem('token', data.token);
                await this.setState({
                  userType: data.userType
                })
                if(this.state.username === 'admin'){
                this.props.history.push('/AdminDashboard/' + this.state.username)
                }
                else if (this.state.username === 'company'){
                  this.props.history.push('/CompanyDashboard/' + this.state.username)
                }
                else if (this.state.username === 'user'){
                  this.props.history.push('/Dashboard/' + this.state.username)
                }
            } 
            else {
                window.alert('Credentials are incorrect')
            }
        })          
    }
  render() {
    return (
      <div className='loginPage'>
        <form>
            <label for='username'>
                Username:
                <input type='username' ref={this.usernameRef}/>
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
