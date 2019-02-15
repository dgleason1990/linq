import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import {apiKey} from '../Headers';
import {withRouter} from 'react-router-dom';

export class GoogleMaps extends Component {
    state = {
        activeMarker: {},
        selectedPlace: {
          data:{
            businessName: '',
            img: '',
            _id: ''
          }
        },
        showingInfoWindow: false
      };
    async componentDidMount(){
        await this.setState({
            selectedPlace: {
                data:{
                    businessName: this.props.businessName,
                    img: this.props.businessName,
                    address: this.props.address
                }
            }
        })
    }
    onMouseoverMarker = async (props, marker) =>{
        await this.setState({
          activeMarker: marker,
          selectedPlace: props,
          showingInfoWindow: true
        })};

    onInfoWindowClose = () =>
    this.setState({
    activeMarker: null,
    showingInfoWindow: false
    });
  
    onInfoWindowOpen() {
        const button = (<button onClick={e => {this.props.history.push(this.props.history.push('/Genre/' + this.props.genreSelected + '/' + this.state.selectedPlace.data.businessName.split(' ').join('')))}}> Select your Stylist </button>
      );
        ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
      }
    
  render() {
    let  genreData = (data) =>{ 
        return (
          <Marker onMouseover={this.onMouseoverMarker}
            data={data}
            position={{ lat: data.location.coordinates[0].$numberDecimal, lng: data.location.coordinates[1].$numberDecimal}}/>
            )};
    let center = { lat: this.props.clientLocation.lat,
            lng: this.props.clientLocation.lng}
    return (
      <div>
        <Map google={this.props.google} containerStyle={{height:'80%', width:'80%'}} zoom={13} center={center}>
            {this.props.genreInfo.map((data) => genreData(data))}
            <Marker position={center} className='googleMarker' name={'Your Location'}/>
            <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
            onOpen={e => {
            this.onInfoWindowOpen(this.props, e);
            }}>
            <div className='businessCard'>
                <h1> {this.state.selectedPlace.data.name} </h1>
                <img src={this.state.selectedPlace.data.img} style={{width:'20vw'}}/>
                <h2> Rating: {this.state.selectedPlace.data.rating} </h2>
                <div id="iwc" />
            </div>
            </InfoWindow>
      </Map>
      </div>
    )
  }
}

export default withRouter(GoogleApiWrapper({
    apiKey: apiKey
  })(GoogleMaps))