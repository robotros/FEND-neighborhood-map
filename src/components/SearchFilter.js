import React, {Component} from 'react';
import PropTypes from 'prop-types';


/**
* React Component to Render a Book
* @author [Aron Roberts](https://github.com/robotros)
*/
class SearchFilter extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <form>
        <div className='form-group'>
          <input type='text' className='form-control' id='searchBox' placeholder='Search...'>
          </input>
        </div>
      </form>
    );
  }
}

SearchFilter.propTypes = {};


export default SearchFilter;
