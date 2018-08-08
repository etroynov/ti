/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const TeamAvatar = styled.img`
  width: 90px;
  height: 90px;
  margin: 5px
`;

export const TeamTitle = styled.p`
  font-weight: normal;
  color: white;
  line-height: 2.5;
  font-size: 2em;
  margin: 5px;
`;

export const TeamName = styled.span`
  font-weight: bold
`;

export const Right = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  flex: 2;
  padding-left: 25px;
`;

export const Left = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  flex: 2;
  padding-right: 25px;
`;

export const Center = styled.div`
  flex: 1;
  background-color: #474457;
  color: white;
  margin: inherit;
  font-size: 60px;
`;

export const Score = styled.div`
  text-align: center;
  display: flex;
  background-color: #3c394a;
`;

export const Content = styled.div`
  line-height: 1.5;
`;
export const Container = styled.div`
  border: 1px solid black
`;
export const Header = styled.div`
`;
export const Footer = styled.div`
  display: flex;
  height: 200px;
  text-align: center;
`;
