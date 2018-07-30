/*!
 * Dependencies
 */

import React from 'react';

/*!
 * Components
 */

import Teams from '../Teams';
import MatchHistory from '../MatchHistory';
import Descriptions from '../Descriptions';

/*!
 * Expo
 */

export default () => (
  <div style={{ margin: 10 }}>
    <Descriptions />
    <Teams />
    <div style={{ marginTop: 50 }} />
    <MatchHistory />
  </div>
);
