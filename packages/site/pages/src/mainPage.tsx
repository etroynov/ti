/*
 * dependencies
 */
import * as React from 'react';
/*
 * Components
 */
import Search from './components/input'
import List from './components/list'
import Card from './components/card'
/*
 * Styled Components
 */
import {
  Container,
  Footer,
  NavBar,
  Main,
  Body,
  Commercial
} from './components/styledComponents/styledMainScreen'

import {
  CardHeader,
  CardBody,
  CardFooter
} from './components/styledComponents/styledCard'

import {
  MenuList
} from './components/styledComponents/styledMenuList'
/*
 * Manually data
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
]
const category = [
  "Команды",
  "Турниры",
  "Матчи",
  "Турнирная сетка",
  "Прямой эфир",
  "Команды",
  "Турниры",
  "Матчи",
  "Матчи",
  "Матчи",
  "Матчи"
];
/*
 * Expo
 */
export default class App extends React.Component {

  state = { charactersCount: null }

  handleShowList = (item) => this.setState({ charactersCount: item })

  render() {
    return (
      <div style={{ backgroundColor: '#f0eeeb' }}>
        <Container>
          <NavBar>
            <Search placeholder={'Введите текст'} handleShowList={this.handleShowList} />
          </NavBar>
          <Main>
            {this.state.charactersCount && this.state.charactersCount.length > 0 ? <List data={array} handleShowList={this.handleShowList} /> : null}
            {category.map(el => <MenuList>{el}</MenuList>)}
          </Main>
          <Body>
            <div className="card_list">
              <Card>
              </Card>
              <Card>
                <CardBody></CardBody>
              </Card>
              <Card>
                <CardFooter></CardFooter>
              </Card>

              <Card>
                <CardHeader></CardHeader>
                <CardBody></CardBody>
              </Card>
              <Card>
                <CardHeader></CardHeader>
                <CardBody></CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardBody></CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardHeader></CardHeader>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </Body>
          <Commercial>
            <div className="card-lsit" style={{ margin: 20 }}>
              <Card>
                <CardBody></CardBody>
              </Card>
              <Card>
                <CardBody></CardBody>
              </Card>
              <Card>
                <CardBody></CardBody>
              </Card>
              <Card>
                <CardBody></CardBody>
              </Card>
              <Card>
                <CardBody></CardBody>
              </Card>
            </div>
          </Commercial>
          <Footer>
          </Footer>
        </Container>
      </div>
    );
  }
}

