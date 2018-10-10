import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render a map using Goolge Map Api
* @author [Aron Roberts](https://github.com/robotros)
*/
class InforWindow extends Component {
  /**
  * render function for map component
  * @author [Aron Roberts](https://github.com/robotros)
  * @return {JSX} return HTML code to render
  */
  render() {
    return (
      <div>
        <h3>{this.props.details.location_name}</h3>
        <ul>
          <li>Phone: {this.props.details.phone}</li>
          <li>
            <a href={this.props.details.website}>
              {this.props.details.website}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

InforWindow.propTypes = {
  details: PropTypes.object.isRequired,
};

export default InforWindow;
