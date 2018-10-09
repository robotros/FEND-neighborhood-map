import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
* React Component to Render a Hamburger Icon
* @author [Aron Roberts](https://github.com/robotros)
*/
class Hamburger extends Component {
  /**
  * React Component to Render a map using Goolge Map Api
  * @author [Aron Roberts](https://github.com/robotros)
  * @return {component}
  */
  render() {
    return (
      <div className='nav'>
        <button onClick={this.props.toggleNav} type='button' className="btn btn-info btn-lg">
          <FontAwesomeIcon icon="bars" />
        </button>
      </div>
    );
  }
}

Map.propTypes = { };

export default Hamburger;
