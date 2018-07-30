/*!
 * Dependencies
 */

import React from 'react';

/*!
 * ManualData
 */

import { Teams } from '../ManualData';

/*!
 * Styled Component
 */

import {
  Container,
  TitleBorder,
  Title,
  Table,
  Header,
  Sub,
  LeftColumn,
  RightColumn,
} from './style';

/*!
 * Components
 */

import TeamContent from '../TeamsContent';

/**
 * Render List Item
 */

const renderListItem = teams => teams.map(item => <TeamContent {...item} />);

/*!
* Expo
*/

export default () => (
  <Container>
    <TitleBorder>
      <Title>Участие в командах</Title>
    </TitleBorder>
    <Table>
      <Header>
        <LeftColumn>Команда</LeftColumn>
        <RightColumn>
          <Sub >Победы</Sub>
          <Sub>Ничья</Sub>
          <Sub>Поражение</Sub>
        </RightColumn>
      </Header>
      {renderListItem(Teams)}
    </Table>
  </Container>
);
