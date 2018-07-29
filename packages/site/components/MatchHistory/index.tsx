/*!
 * dependencies
 */

import * as React from 'react';

/*!
 * ManualData
 */

import { Matches } from '../ManualData';
/**
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
 * Expo
 */

export default class App extends React.Component {
  renderListItem = (matches) => {
    return matches.map(item =>
      (
        <MatchHistContent {...item}/>
      ),
    );
  }
  render() {
    return (
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
          {this.renderListItem(Matches)}
        </Table>
      </Container>
    );
  }
}
