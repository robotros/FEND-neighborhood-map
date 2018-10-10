import React from 'react';
import {Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faTree, faMapMarked, faWifi, faLeaf, faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import * as SocrataAPI from './components/SocrataAPI';
import Map from './components/Map';
import InforWindow from './components/InforWindow';
import Hamburger from './components/Hamburger';
import Shelf from './components/Shelf';
import './css/App.css';

// font awesome icon library
library.add(faBars, faTree, faMapMarked, faWifi, faLeaf, faPaintBrush);

/**
* React Component to Render a MapApp
* @author [Aron Roberts](https://github.com/robotros)
*/
class MapApp extends React.Component {
  state = {
    radius: 3000,
    options: {
      center: {lat: 34.052234, lng: -118.243604},
      zoom: 14,
    },
    parks: [],
    infoWindow: '<div class="infoWindow"><div calss="content"></div></div>',
    markers: [],
    locationType: 'Parks',
  }

  /**
  * Make SocrataAPI call to get local parks and place markers on map
  */
  getParksOnMap() {
    console.log(this.state.locationType);
    SocrataAPI.getParks(this.state.options.center, this.state.radius, this.state.locationType)
        .then((data) => {
          this.setState({parks: data}, () => {
            if (this.state.map) {
              this.dropMarkers(this.state.map);
            }
          });
        });
  }

  /**
  * Change location type
  * @param {string} type : location type to retrive markers for
  */
  changeType =(type) =>{
    console.log(type);
    this.state.markers.forEach((marker)=>{
      marker.marker.setMap(null);
    });
    this.setState({locationType: type}, ()=>{this.getParksOnMap()});
  }

  /**
  * simulate a marker click
  * @param {string} locName : Marker Title to be clicked
  */
  clickMarker = (locName) => {
    let marker = this.state.markers.filter((m) => m.name === locName);
    window.google.maps.event.trigger(marker[0].marker, 'click');
  }

  /**
  * toggle Side Nav
  */
  toggleNav = () => {
    document.getElementById('sidenav').classList.toggle('open');
    document.getElementById('sidenav').classList.toggle('close');
  }

  /**
  * return marker information
  * @param {string} name : location name for marker
  */
  getParkMarker(name) {
    SocrataAPI.getPark(name).then((data) => {
      this.setState({content: data});
    });
  }

  /**
  * Run methods once component has mounted
  */
  componentDidMount() {
    this.getParksOnMap();
  }

  /**
  * place markers on the map
  * @param {object} map google map object that pin should be dropped on
  */
  dropMarkers = (map) => {
    let markerList =[];
    let infoWindow = new window.google.maps.InfoWindow({
      content:this.state.infoWindow,
    });

    this.state.parks.forEach((park)=>{
      let marker = new window.google.maps.Marker({
        position: {lat: parseFloat(park.geolat), lng: parseFloat(park.geolong)},
        map: map,
        animation: window.google.maps.Animation.DROP,
        title: park.location_name,
      });

      // create event listeners for markers
      marker.addListener('click', ()=> {
        infoWindow.setContent(ReactDOMServer.renderToString(<InforWindow details={park}/>));
        marker.setAnimation(4);
        infoWindow.open(map, marker);
      });

      markerList.push({name: marker.title, marker: marker});
    });

    this.setState({markers: markerList});
  }

  /**
  * perform task that add map functionality
  * @param {object} map  Google Map that functionality should be used for
  */
  onMapLoad = (map) => {
    this.dropMarkers(map);
    this.setState({map: map});
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={()=> (
          <div className='Map-App'>
            <div className='top'>
              <Hamburger toggleNav={this.toggleNav}/>
            </div>
            <div className='sidenav' id='sidenav'>
              <Shelf
                locations={this.state.parks}
                onClick={this.clickMarker}
                onChange={this.changeType}
              />
            </div>
            <Map
              id='myMap'
              options={this.state.options}
              onMapLoad={this.onMapLoad}
            />
          </div>
        )}/>
      </div>
    );
  }
}

export default MapApp;
