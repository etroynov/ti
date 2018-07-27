/*!
 * Dependencies
 */

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

/*!
 * Components
 */

import List from 'components/List';
import Card from 'components/Card';
// import Search from '../components/input';
import Button from 'components/Button';

/*
 * Styled Components
 */

import {
  Container,
  Footer,
  NavBar,
  Main,
  Body,
  Commercial,
} from 'styledComponents/styledMainScreen';

import { MenuList } from 'styledComponents/styledMenuList';

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
              <Button>Test</Button>
              {search}
              {category.map(el => <MenuList key={el}>{el}</MenuList>)}
            </Main>
            <Body>
              <div className="card_list">
                <Card />
              </div>
            </Body>
            <Commercial />
            <Footer />
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default Home;
