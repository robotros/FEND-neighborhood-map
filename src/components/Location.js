import React, {Component} from 'react';
import PropTypes from 'prop-types';


/**
* React Component to Render a Book
* @author [Aron Roberts](https://github.com/robotros)
*/
class Location extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    const details = this.props.details;

    return (
      <div className='location'>
        <div className='location-details'>
          {details.location_name}
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  /**
  * A Location
  */
  details: PropTypes.object.isRequired,
};


export default Location;
