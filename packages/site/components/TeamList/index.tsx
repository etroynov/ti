/*!
 * Dependencies
 */

import React from 'react';

/*!
 * InitialState
 */

import { TeamList } from '../ManualData';

/*!
 * Styled Component
 */

import {
  Container,
  Table,
  Header,
  LeftColumn,
  RightColumn,
  CenterColumn,
  Content,
  Icon,
  Left,
  Right,
  Center,
  TeamAvatar,
  TeamName,
  TeamContainer,
  TemaInfo,
} from './style';

/*!
 * Components
 */

import Cups from '../Cups';

/**
 * Render List Item
 */

const renderListItem = teams => teams.map((item, index) => {
  const src = '../static/' + item.game + '.svg';
  return (
    <Content key={index}>
      <Left>{index + 1}</Left>
      <Center>
        <TeamContainer>
          <TeamAvatar src={item.teamAvatar} />
          <TemaInfo>
            <TeamName>{item.teamName}</TeamName>
          </TemaInfo>
        </TeamContainer>
      </Center>
      <Center>
        <Icon src={src} />
      </Center>
      <Center>
        {item.totalAmount}
      </Center>
      <Right>
        <Cups gold={12} bronze={25} silver={45}/>
      </Right>
    </Content>
  );
},
);

/*!
* Expo
*/

export default () => (
  <Container>
    <Table>
      <Header>
        <LeftColumn>Место</LeftColumn>
        <CenterColumn>Команда</CenterColumn>
        <CenterColumn>Игра</CenterColumn>
        <CenterColumn>Сумма призовых</CenterColumn>
        <RightColumn>Награды</RightColumn>
      </Header>
      {renderListItem(TeamList)}
    </Table>
  </Container>
);
