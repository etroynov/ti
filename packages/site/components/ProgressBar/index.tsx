/*!
 * Dependencies
 */

import React from 'react';

/*!
 * Styled Component
 */

import {
  ProgressBar,
  Part,
  Footer,
  Item,
  Header,
  Title,
} from './style';

/*!
 * Helpers
 */

const percentsCalc = (int, games) => `${((int / games) * 100).toFixed(2)}%`;

/*!
 * Expo
 */

export default (props: IProgressBarProps) => {
  const { totalGame } = props;

  const wins = percentsCalc(props.wins, totalGame);
  const draw = percentsCalc(props.draw, totalGame);
  const lose = percentsCalc(props.lose, totalGame);

  return (
    <div>
      <Header size={props.size}>
        <Title>
          Всего матчей: {totalGame}
        </Title>
      </Header>
      <ProgressBar size={props.size}>
        <Part percents={wins} color={'#5cb85c'} first={true} />
        <Part percents={draw} color={'#777'} />
        <Part percents={lose} color={'#d9534f'} last={true} />
      </ProgressBar>
      <Footer size={props.size}>
        <Item percents={wins} color={'#5cb85c'} first={true}>
          {wins}
        </Item>
        <Item percents={draw} color={'#777'}>
          {draw}
        </Item>
        <Item percents={lose} color={'#d9534f'} last={true}>
          {lose}
        </Item>
      </Footer>
    </div>
  );
};
