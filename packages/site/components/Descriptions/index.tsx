/*!
 * dependencies
 */

import * as React from 'react';

/*!
 * ManualData
 */

import { Player } from '../ManualData';

/*!
 * Styled Component
 */

import {
  Progress,
  Right,
  Left,
  Avatar,
  Footer,
  Title,
  PlayerInfo,
  Icon,
  IconTitle,
  Inline,
} from './style';

/*!
 * Compnents
 */

import ProgressBar from '../ProgressBar';
import TeamComponent from '../TeamComponent';

/*!
 * Expo
 */

export default class App extends React.Component {

  render() {
    const { name, avatar, totalAmount, paragraph1, paragraph2, paragraph3 } = Player;
    return (
      <div>
        <Left>
          <Avatar src={avatar} />
          <Footer>
            <Icon src="../static/icons-booty.svg#svgView(viewBox(0,0,26,20))" />
            <Icon src="../static/icons-booty.svg#svgView(viewBox(26,0,26,20))" />
            <Icon src="../static/icons-booty.svg#svgView(viewBox(52,0,26,20))" />
            <Title> Призовые:</Title>
            <span>{totalAmount}</span>
          </Footer>
        </Left>
        <Right>
          <TeamComponent {...Player} />
          <Progress>
            <ProgressBar {...Player} size={280}/>
          </Progress>
        </Right>
        <PlayerInfo>
          <p>
            <Inline>
              <Icon src="../static/dota2.svg" />
              <IconTitle>{name}</IconTitle>
            </Inline>
          </p>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </PlayerInfo>
      </div>
    );
  }
}
