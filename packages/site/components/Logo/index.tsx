/*!
 * Dependencies
 */

import * as React from 'react';
import styled from 'styled-components';

/*!
 * Components
 */

import Year from './Year';

/**
 * Styled
 */

const Wrapper = styled.div`
  width: 450px;
`;

/*!
 * Expo
 */

const Logo = ({ url, year }) => (
  <Wrapper>
    <img src={url} alt="The international 2018" />
    <Year>{year}</Year>
  </Wrapper>
);

export default Logo;
