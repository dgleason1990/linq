import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class AdminDashboard extends Component {
  constructor() {
    super();
    this.industryRef = React.createRef();
    this.companyNameRef = React.createRef();
    this.companyImgRef = React.createRef();
    this.addressRef = React.createRef();
    this.summaryRef = React.createRef();
  }

  state={
    loading: true,
    auth: false,
    username: '',
    userType:'',
    industries:[]
  }

  async componentDidMount(){ 
    let  url = 'http://localhost:8080'
    if(localStorage.token !== undefined && localStorage.token !== null){
        await fetch(url + '/dashboard',{headers:{'authorization':localStorage.token}})
        .then((res) => res.json())
        .then( async data => 
          await this.setState({
          username: data.username,
          userType: data.userType
        }))
        .catch((err) => {
          console.log(err);
          //send user back to login page if token is invalid
          window.location.href = url+'/Login';
        })
    }
    else{
        window.location.href = url+'/Login';
    }
  }
  render() {
    return (
      <div className='dashboard'>
        <div>
          <form>
            <h1> Create New Industry </h1>
            <label for='industry'> Industry: </label>
            <input ref={this.industryRef} />
          </form>
          <form> 
            <h1> Create a New Company </h1>
            <label for='companyName'> Company Name: </label>
            <input ref={this.companyNameRef} />
            <label for='img'> Image URL: </label>
            <input ref={this.companyImgRef}/>
            <label for='address'> Address: </label>
            <input ref={this.addressRef}/>
            <label for='summary'> Summary: </label>
            <input ref={this.summaryRef}/>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(AdminDashboard)
