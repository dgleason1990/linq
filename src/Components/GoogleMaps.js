import React, { Component } from 'react';
import {KmlLayer, Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import {apiKey} from '../Headers';
import {withRouter} from 'react-router-dom';
import SideBar from './SideBar';

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
        sideBar:{
          isLoaded: false,
          businessName:'No place selected',
          img: '',
          _id: ''
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
    
    onMarkerClick = async (props, marker) =>{
        await this.setState({
          activeMarker: marker,
          selectedPlace: props,
          showingInfoWindow: true
        })};

      onInfoWindowOpen() {
        const button = (<button onClick={ async () => { await this.setState({
          sideBar:{
            isLoaded: true,
            businessName: this.state.selectedPlace.data.businessName.split(' ').join(''),
            img: this.state.selectedPlace.data.img
          }
        });}}> Book your appointment </button>
      );
        ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
      }
    
  render() {
    let  genreData = (data) =>{ 
        return (
          <Marker onClick={this.onMarkerClick}
            data={data}
            position={{ lat: data.point.coordinates[0], lng: data.point.coordinates[1]}}/>
            )};

    let center = { lat: this.props.clientLocation.lat,
            lng: this.props.clientLocation.lng}

    let icon = {url: './Assets/currentLocation.svg',scaledSize: new window.google.maps.Size(30,30)}

    let displaySidebar = () =>{
      if (this.state.sideBar.isLoaded === true){
        return <SideBar companyInfo={this.state.sideBar}/>
      } else {
        return <div className='googleInfo'>
            <img src={this.state.img}/>
            <h1> {this.state.businessName} </h1>
          </div>
      }
    }
    return (
      <div className='googleMaps'>
        {displaySidebar()}
        <Map mapTypeControl={false} google={this.props.google} containerStyle={{height:'80%', width:'80%'}} zoom={13} center={center}>
            {this.props.genreInfo.map((data) => genreData(data))}
            <Marker position={center} icon={icon} name={'Your Location'}/>
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onOpen={e => {
            this.onInfoWindowOpen(this.props, e);
            }}>
            <div className='businessCard'>
                <h1> {this.state.selectedPlace.data.name} </h1>
                <img src={this.state.selectedPlace.data.img} style={{width:'20vw'}}/>
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