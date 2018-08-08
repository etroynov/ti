/*!
 * Dependencies
 */

import React from 'react';

/*!
 * InitialState
 */

import { PlayersList } from '../ManualData';

/*!
 * Styled Component
 */

import {
  Icon,
  Left,
  Table,
  Right,
  Center,
  Header,
  Content,
  TeamName,
  TemaInfo,
  Container,
  TeamAvatar,
  LeftColumn,
  PlayerInfo,
  PlayerName,
  PlayerTitle,
  RightColumn,
  CenterColumn,
  PlayerAvatar,
  TeamContainer,
  PlayerContainer,
} from './style';

/*!
 * Components
 */

import Cups from '../Cups';

/**
 * Render List Item
 */

const renderListItem = players => players.map((item, index) => {
  const src = '../static/' + item.game + '.svg';
  return (
    <Content key={index}>
      <Left>{index + 1}</Left>
      <Center>
        <PlayerContainer>
          <PlayerAvatar src={item.playerAvatar} />
          <PlayerInfo>
            <PlayerTitle>{item.playerName}</PlayerTitle>
            <PlayerName>{item.nickName}</PlayerName>
          </PlayerInfo>
        </PlayerContainer>
      </Center>
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
        <CenterColumn>Имя</CenterColumn>
        <CenterColumn>Команда</CenterColumn>
        <CenterColumn>Игра</CenterColumn>
        <CenterColumn>Сумма призовых</CenterColumn>
        <RightColumn>Награды</RightColumn>
      </Header>
      {renderListItem(PlayersList)}
    </Table>
  </Container>
);
