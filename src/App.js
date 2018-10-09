import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import * as SocrataAPI from './SocrataAPI';
import Map from './Map';
import InforWindow from './InforWindow';
import './App.css';

/**
* React Component to Render a MapApp
* @author [Aron Roberts](https://github.com/robotros)
* @param {componet} map : React Component to render Map
*/
class MapApp extends React.Component {
  state = {
    options: {
      center: {lat: 34.052234, lng: -118.243604},
      zoom: 14,
    },
    parks: [],
    infoWindow: '<div class="infoWindow"><div calss="content"></div></div>',
  }

  /**
  * place markers on the map
  */
  getParksOnMap() {
    SocrataAPI.getParks(this.state.options.center).then((data) => {
      this.setState({parks: data});
      if (this.state.map) {
        this.dropMarkers(this.state.map);
      }
    });
  }

  /**
  * return marker information
  * @param {string} name : location name for marker
  */
  getParkMarker(name) {
    SocrataAPI.getPark(name).then((data) => {
      this.setState({content:data});
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
        this.getParkMarker(marker.title);
        console.log(this.state.content)
        infoWindow.setContent(ReactDOMServer.renderToString(<InforWindow test={marker.title}/>));
        infoWindow.open(map, marker);
      });
    });
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
      <div className="app">
        <Route exact path='/' render={()=> (
          <div className="Map-App">
            <Map
              id="myMap"
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
