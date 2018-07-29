/*!
 * dependencies
 */
import * as React from 'react';
/**
 * ManualData
 */
import { Teams } from '../ManualData';
/**
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
/**
 * COmponents
 */
import TeamContent from '../TeamsContent';
/*!
 * Expo
 */

export default class App extends React.Component {

  renderListItem = (teams) => {
    return teams.map(item =>
      (
        <TeamContent {...item}/>
      ),
    );
  }

  render() {
    return (
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
          {this.renderListItem(Teams)}
        </Table>
      </Container>
    );
  }
}
