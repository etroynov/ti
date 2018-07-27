/*
 * dependencies
 */
import * as React from 'react';
/**
 * Components
 */

import Teams from '../Teams';
import MatchHistory from '../MatchHistory';
import Descriptions from '../Descriptions';

/*
 * Expo
 */

export default class App extends React.Component {

  render() {
    return (
      <div style={{ margin: 10 }}>
        <Descriptions />
        <Teams />
        <div style={{ marginTop: 50 }} />
        <MatchHistory />
      </div>
    );
  }
}
