/*!
 * Dependencies
 */

import * as React from 'react';
import { injectGlobal } from 'styled-components';

/*!
 * Components
 */

import Logo from '../Logo';
import MainNav from '../MainNav';

/*!
 * Global style
 */

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;

    color: #222222;
    font: normal 15px Arial, sans-serif;

    background-color: #f0eeeb
  }
`;

/*!
 * initialState
 */

const items = [
  {
    name: 'Команды',
    slug: 'teams',
  },
  {
    name: 'Турниры',
    slug: 'tournaments',
  },
  {
    name: 'Матчи',
    slug: 'matches',
  },
  {
    name: 'Турнирная сетка',
    slug: 'tournament_bracket',
  },
  {
    name: 'Прямой эфир',
    slug: 'live',
  },
];

/*!
 * Expo
 */

const Header = () => (
  <header>
    <Logo url="/static/img/logo.svg" year="2018" />
    <MainNav items={items} />
  </header>
);

export default Header;
