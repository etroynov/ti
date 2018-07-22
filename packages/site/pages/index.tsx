/*!
 * Dependencies
 */

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

/*!
 * Components
 */

/*
 * Styled Components
 */

/*!
 * Theme
 */

import basicTheme from './../theme/basic';

/*
 * Expo
 */

const Home = () => (
  <ThemeProvider theme={basicTheme}>
    <div>
      <img src="/img/logo.svg" alt=""/>
    </div>
  </ThemeProvider>
);

export default Home;
