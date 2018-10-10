import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


/**
* React Component to Render a Book
* @author [Aron Roberts](https://github.com/robotros)
*/
class Location extends Component {
  /**
  * Click event
  */
  locClick = () => {
    this.props.onClick(this.props.details.location_name);
  }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    const details = this.props.details;
    // console.log(details);

    return (
      <div className='location'>
        <div className='location-details'>
          <button type='button' className='btn btn-dark list text-left' onClick={this.locClick}>
            {details.locationtype==='Parks' ? <FontAwesomeIcon icon='tree' /> : <FontAwesomeIcon icon='map-marked' />}-
            {details.location_name}
          </button>
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
  onClick: PropTypes.func.isRequired,
};


export default Location;
