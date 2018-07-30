/*!
 * Dependencies
 */

import React from 'react';

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

export default ({ teamAvatar, teamName } : ITeamComponentProps) => (
  <TeamContainer>
    <TeamAvatar src={teamAvatar} />
    <TemaInfo>
      <TeamTitle>Игрок команды</TeamTitle>
      <TeamName>{teamName}</TeamName>
    </TemaInfo>
  </TeamContainer>
);
