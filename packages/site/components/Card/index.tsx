/*!
 * Dependencies
 */

import * as React from 'react';

/*!
 * Styled Components
 */

import { Card } from './styles';

/*!
 * Expo
 */

export default class App extends React.Component {
  render() {
    if (this.props.children) return <Card>{this.props.children}</Card>;

    return null;
  }
}
