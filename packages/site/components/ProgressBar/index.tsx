/*!
 * dependencies
 */
import * as React from 'react';

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
 * Expo
 */

export default class App extends React.Component<IProgressBarProps, IProgressBarState> {

  percentsCalc = (int, games) => ((int / games) * 100).toFixed(2) + '%';

  render() {
    const { totalGame } = this.props;
    const wins = this.percentsCalc(this.props.wins, totalGame);
    const draw = this.percentsCalc(this.props.draw, totalGame);
    const lose = this.percentsCalc(this.props.lose, totalGame);
    return (
      <div>
        <Header size={this.props.size}>
          <Title>
            Всего матчей: {totalGame}
          </Title>
        </Header>
        <ProgressBar size={this.props.size}>
          <Part percents={wins} color={'#5cb85c'} first={true} />
          <Part percents={draw} color={'#777'} />
          <Part percents={lose} color={'#d9534f'} last={true} />
        </ProgressBar>
        <Footer size={this.props.size}>
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
  }
}
