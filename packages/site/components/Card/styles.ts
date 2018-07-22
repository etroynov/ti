/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const Card = styled.div`
  border: 1px  solid #e5e5e5;
  width: 250px;
  float: left;
  margin: 20px;
  &:hover {
    cursor: pointer;
    border-color: black
  }
`;

export const Header = styled.div`
  width: 250px;
  height: 50px;
`;

export const Body = styled.div`
  width: 250px;
  height: 150px;
`;

export const Footer = styled.div`
  width: 250px;
  height: 50px;
`;
