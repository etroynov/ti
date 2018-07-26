/*!
 * Dependencies
 */

import * as React from 'react';
import { injectGlobal } from 'styled-components';

/*!
 * Components
 */

import Logo from '../Logo';

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
 * Expo
 */

const Header = () => (
  <header>
    <Logo url="/static/img/logo.svg" year="2018" />
  </header>
);

export default Header;
