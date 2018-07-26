/*!
 * Dependencies
 */

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

/*!
 * Components
 */

import { Layout, Header, Footer } from '../components/Common';

/*!
 * Theme
 */

import theme from '../theme/basic';

/*
 * Expo
 */

const Home = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default Home;
