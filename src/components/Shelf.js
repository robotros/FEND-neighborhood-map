import React, {Component} from 'react';
import Location from './Location';
import SearchFilter from './SearchFilter';
import PropTypes from 'prop-types';

/**
* React Component to Render a Shelf
* @author [Aron Roberts](https://github.com/robotros)
*/
class Shelf extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    const shelf = {
      locations: this.props.locations,
    };

    return (
      <div className='shelf'>
        <SearchFilter onChange={this.props.onChange}/>
        <div className='shelf-locations'>
          <ul role='menu' className='locations-list'>
            {shelf.locations.map((location, index) => (
              <li role='none' key={index}>
                <Location
                  onClick={this.props.onClick}
                  details={location}
                />
              </li>))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  locations: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Shelf;
