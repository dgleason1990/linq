import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
  state={}

  componentDidMount(){ 
    let  url = 'http://localhost:8080'
    if(localStorage.token !== undefined && localStorage.token !== null){
        //Add token to request header
        fetch(url + '/Dashboard',{headers:{'authorization':localStorage.token}})
        .then((res) => { 
            if(res.status === 200){
                this.setState({
                    loading:false,
                    auth:true
                })}
            res.json()
            .then(data=>{this.setState({
                data: data
                })
            })
        })
        .catch((err) => {
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
      <div>
        
      </div>
    )
  }
}

export default withRouter(Dashboard)
