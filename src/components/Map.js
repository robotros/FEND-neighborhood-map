import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render a map using Goolge Map Api
* @author [Aron Roberts](https://github.com/robotros)
*/
class Map extends Component {
  /**
  * Constructor for Map Component
  * @author [Aron Roberts](https://github.com/robotros)
  * @param {dict} props
  */
  constructor(props) {
    super(props);
    this.state = {API_KEY: 'AIzaSyDbm7B-Fbd60TWRk_AIogSc1CaUoWRe8v8'};
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  /**
  * funcition to generate map after script has been loaded
  * @author [Aron Roberts](https://github.com/robotros)
  */
  onScriptLoad() {
    const map = new window.google.maps.Map(
        document.getElementById(this.props.id),
        this.props.options);
    this.props.onMapLoad(map);
  }

  /**
  * funcition to run once component is mounted
  * checks if script has been attached
  * creates listener for script to load
  * @author [Aron Roberts](https://github.com/robotros)
  */
  componentDidMount() {
    // check if script is already added
    if (!window.google) {
      const scriptURL = 'https://maps.google.com/maps/api/js?key='+this.state.API_KEY;
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = scriptURL;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      // create listener to run function when script is loaded
      s.addEventListener('load', (e) => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  /**
  * render function for map component
  * @author [Aron Roberts](https://github.com/robotros)
  * @return {JSX} return HTML code to render
  */
  render() {
    return (
      <div id={this.props.id}></div>
    );
  }
}

Map.propTypes = {
  /**
  * Function to run once a map is loaded
  */
  onMapLoad: PropTypes.func.isRequired,
  /**
  * options for map API call
  */
  options: PropTypes.any.isRequired,
  /**
  * ID element of map in dom
  */
  id: PropTypes.string.isRequired,
};

export default Map;
