/*!
 * dependencies
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

export default class App extends React.Component {
  render() {
    return (
      <Content>
        <Team>
          <TeamComponent {...this.props}/>
        </Team>
        <Progress>
          <ProgressBar {...this.props} />
        </Progress>
      </Content>
    )
  }
}