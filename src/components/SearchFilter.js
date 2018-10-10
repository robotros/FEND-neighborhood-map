import React, {Component} from 'react';
import PropTypes from 'prop-types';


/**
* React Component to Render a Book
* @author [Aron Roberts](https://github.com/robotros)
*/
class SearchFilter extends Component {
  state = {
    value: 'All',
  }

  /**
  * React Component to Render a Book
  * @author [Aron Roberts](https://github.com/robotros)
  * @param {event} event
  */
  onChange = (event) => {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <form>
        <div className='form-group'>
          <select
            className="form-control"
            id="TypeSelect"
            value={this.state.value}
            onChange={this.onChange}>
            <option value='All'>All</option>
            <option value='Parks'>Parks</option>
            <option value='Museums'>Museums</option>
            <option value='Gardens'>Gardens</option>
            <option value='Free+Wi-Fi+Hot+Spots'>Free Wi-Fi Hot Spots</option>
          </select>
        </div>
      </form>
    );
  }
}

SearchFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};


export default SearchFilter;
