import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
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
      center: {lat: 33.953439, lng: -118.042778},
      zoom: 15,
    },
    markers: [
      {
        position: {lat: 33.942349, lng: -118.037683},
        title: 'PokemonGo Gym!',
      },
      {
        position: {lat: 33.939650, lng: -118.048093},
        title: 'PokemonGo Gym!',
      },
      {
        position: {lat: 33.941954, lng: -118.048935},
        title: 'PokemonGo Gym!',
      },
      {
        position: {lat: 33.954629, lng: -118.041251},
        title: 'PokemonGo Gym!',
      },
      {
        position: {lat: 33.962971, lng: -118.032741},
        title: 'PokemonGo Gym!',
      },
    ],
    infoWindow: '<div class="infoWindow"><div calss="content"></div></div>',
  }

  /**
  * place markers on the map
  * @param {object} map google map object that pin should be dropped on
  */
  dropMarkers = (map) => {
    let infoWindow = new window.google.maps.InfoWindow({
      content:this.state.infoWindow,
    });

    this.state.markers.forEach((pin)=>{
      let marker = new window.google.maps.Marker({
        position: pin.position,
        map: map,
        animation: window.google.maps.Animation.DROP,
        title: pin.title,
      });

      // create event listeners for markers
      marker.addListener('click', ()=> {
        infoWindow.setContent(ReactDOMServer.renderToString(<InforWindow test='marker'/>));
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
