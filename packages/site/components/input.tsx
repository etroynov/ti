/*!
 * Dependencies
 */

import * as React from 'react';

/*!
 * Styled Components
 */

import { Input } from '../styledComponents/styledInput';

/*!
 * Expo
 */

class Search extends React.Component<ISearchProps, ISearchState> {
  state = { searchCriteria: null };

  handleChange = e => this.props.handleShowList(e.target.value);

  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        type="text"
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;
