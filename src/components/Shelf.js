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
        <SearchFilter />
        <div className='shelf-locations'>
          <ol className='locations-list'>
            {shelf.locations.map((location, index) => (
              <li key={index}>
                <Location
                  details={location}
                />
              </li>))
            }
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default Shelf;
