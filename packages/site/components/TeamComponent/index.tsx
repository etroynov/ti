/*!
 * dependencies
 */
import * as React from 'react';

/*!
 * Styled Component
 */

import {
  TeamAvatar,
  TeamTitle,
  TeamName,
  TeamContainer,
  TemaInfo,
} from './style';

/**
 * Expo
 */

export default class App extends React.Component<ITeamComponentProps, ITeamComponentState> {
  render() {
    const { teamAvatar, teamName } = this.props;
    return (
      <TeamContainer>
        <TeamAvatar src={teamAvatar} />
        <TemaInfo>
          <TeamTitle>Игрок команды</TeamTitle>
          <TeamName>{teamName}</TeamName>
        </TemaInfo>
      </TeamContainer>
    );
  }
}
