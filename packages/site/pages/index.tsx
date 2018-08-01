/*!
 * Dependencies
 */

import React from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

/*!
 * Components
 */

import { Layout, Header, Footer } from '../components/Common';

/*!
 * Theme
 */

import theme from '../theme/default';

/*
 * Expo
 */

const Home = ({ teams }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      {teams.map(({ _id, name }) => <p key={_id}>{name}</p>)}
      <Footer />
    </Layout>
  </ThemeProvider>
);

Home.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:4000/v1/teams');

  return { teams: data };
};

export default Home;
