import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Map from './Map';
import './App.css';

/**
* React Component to Render a MapApp
* @author [Aron Roberts](https://github.com/robotros)
*/
class MapApp extends React.Component {
  state = {
    options: {
      center: {lat: 41.0082, lng: 28.9784},
      zoom: 8,
    },
  }

  /**
  * React Method to get map data once component mounts
  */
  componentDidMount() { }

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
              onMapLoad={(map) => {
                let marker = new window.google.maps.Marker({
                  position: {lat: 41.0082, lng: 28.9784},
                  map: map,
                  title: 'Hello Istanbul!',
                });
              }}
            />
          </div>
        )}/>
      </div>
    );
  }
}

export default MapApp;
