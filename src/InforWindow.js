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
      <div>{this.props.test}</div>
    );
  }
}

InforWindow.propTypes = {
};

export default InforWindow;
