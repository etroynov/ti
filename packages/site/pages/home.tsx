/*!
 * Dependencies
 */

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

/*!
 * Components
 */

import List from '../components/List';
import Search from '../components/Search';

/*
 * Styled Components
 */

import {
  Body,
  Main,
  Footer,
  NavBar,

  Container,
} from '../styledComponents/MainScreen';

import PlayerCard from '../components/PlayerCard';
import { MenuList } from '../styledComponents/styledMenuList';

/*!
 * Theme
 */

import basic from 'theme/basic';

/*!
 * Initial state
 */

const array = [
  'Пермь',
  'Саратов',
  'Волгоград',
  'Казань',
  'Пермь',
  'Саратов',
  'Волгоград',
  'Казань',
  'Пермь',
  'Саратов',
  'Волгоград',
  'Казань',
];

/*
 * Expo
 */

class Home extends React.Component {
  state = { charactersCount: null };

  handleShowList = item => this.setState({ charactersCount: item });

  render() {
    const search = this.state.charactersCount && this.state.charactersCount.length > 0
      ? <List data={array} handleShowList={this.handleShowList} />
      : null;

    return (
      <ThemeProvider theme={basic}>
        <div style={{ backgroundColor: '#f0eeeb' }}>
          <Container>
            <NavBar>
              {/* <Search placeholder={'Введите текст'} handleShowList={this.handleShowList} /> */}
            </NavBar>
            <Main>
              {search}
              {category.map((el, index) => <MenuList key={index.toString()}>{el}</MenuList>)}
            </Main>
            <Body>
              <PlayerCard />
            </Body>
            <Footer />
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default Home;
