/*!
 * Dependencies
 */

import React from 'react';

/*!
 * ManualData
 */

import { Matches } from '../ManualData';

/*!
 * Components
 */

import MatchHistContent from '../MatchHistContent';

/*!
 * Styled Component
 */

import {
  Container,
  TitleBorder,
  Title,
  Table,
  Header,
  LeftColumn,
  RightColumn,
  CenterColumn,
} from './style';

/*!
 * Helpers
 */

const renderListItem = matches => matches.map(item => <MatchHistContent {...item} />);

/*!
 * Expo
 */

export default () => (
  <Container>
    <TitleBorder>
      <Title>История матчей</Title>
    </TitleBorder>
    <Table>
      <Header>
        <LeftColumn>Дата</LeftColumn>
        <CenterColumn>Матч</CenterColumn>
        <RightColumn>Турнир</RightColumn>
      </Header>
      {renderListItem(Matches)}
    </Table>
  </Container>
);
