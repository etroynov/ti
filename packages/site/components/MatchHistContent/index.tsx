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
  TemaInfo,
  Center,
  Right,
  Left,
  Score,
  Date,
  Meeting,
  Content,
} from './style';

/*!
 * Expo
 */

export default (props) => {
  const { date, firstTeam, firstTeamAvatar, score, secondTeam, secondTeamAvatar, meetName, meetStage } = props;

  return (
    <Content>
      <Date>{date}</Date>
      <Score>
        <Left>
          <TemaInfo>
            <TeamTitle>{firstTeam}</TeamTitle>
          </TemaInfo>
          <TeamAvatar src={firstTeamAvatar} />
        </Left>
        <Center>{score}</Center>
        <Right>
          <TeamAvatar src={secondTeamAvatar} />
          <TemaInfo>
            <TeamTitle>{secondTeam}</TeamTitle>
          </TemaInfo>
        </Right>
      </Score>
      <Meeting>
        <span>{meetName}</span> | <span>{meetStage}</span>
      </Meeting>
    </Content>
  );
};
