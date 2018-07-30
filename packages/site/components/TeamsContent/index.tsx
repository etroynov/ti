/*!
 * Dependencies
 */

import * as React from 'react';

/*!
 * Components
 */

import ProgressBar from '../ProgressBar';
import TeamComponent from '../TeamComponent';

/*!
 * Styled Component
 */

import {
  Content,
  Team,
  Progress,
} from './style';

/*!
 * Expo
 */

export default props => (
  <Content>
    <Team>
      <TeamComponent {...props} />
    </Team>
    <Progress>
      <ProgressBar {...props} />
    </Progress>
  </Content>
);
