import React, { Component } from 'react'

export default class Business extends Component {
    state={
        id:'',
        businessType: this.props.match.params.id,
        businessName: '',
        address: '',
        }
    componentDidMount(){
        let init = {
            method:'POST',
            body: JSON.stringify(this.state.businessType),
            headers:{
              "content-type": "application/json"
            }
          }
        fetch('http://localhost:8080/businesses', init)
        .then(res=>res.json())
        .then(data=>this.setState({
            id: data.id,
            businessName: data.businessName,
            address: data.address
        }))
        .catch(err=>console.log(err))
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
