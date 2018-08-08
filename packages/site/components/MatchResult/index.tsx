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
  Center,
  Right,
  Left,
  Score,
  Content,
  Container,
  Header,
  Footer,
} from './style';

/*!
 * ManualData
 */

import { matchResult } from '../ManualData';

/*!
 * Styled Component
 */

/*!
 * Expo
 */

export default () => {
  const { firstTeam, firstTeamAvatar, score, secondTeam, secondTeamAvatar } = matchResult;
  return (
    <Container>
      <Header>
        <Content>
          <Score>
            <Left>
              <TeamTitle style={{ paddingRight: 15 }}>{firstTeam}</TeamTitle>
              <TeamAvatar src={firstTeamAvatar} />
            </Left>
            <Center>
              <span>{score}</span>
            </Center>
            <Right>
              <TeamAvatar src={secondTeamAvatar} />
              <TeamTitle style={{ paddingLeft: 15 }}>{secondTeam}</TeamTitle>
            </Right>
          </Score>
        </Content>
      </Header>
      <Footer />
    </Container>
  );
};
