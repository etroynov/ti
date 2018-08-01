/*!
 * Dependencies
 */

import * as React from 'react';

/*!
 * Styled Component
 */

import {
  Gold,
  Bronze,
  Silver,
  Cup,
} from './style';

/*!
 * Expo
 */

export default ({ gold, bronze, silver }) => (
  <div>
    <Cup>
      <Gold>{gold}</Gold>
    </Cup>
    <Cup>
      <Bronze>{bronze}</Bronze>
    </Cup>
    <Cup>
      <Silver>{silver}</Silver>
    </Cup>
  </div>
);
