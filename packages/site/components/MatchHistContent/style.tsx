/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const TeamAvatar = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px
`;

export const TeamTitle = styled.p`
  margin: 0;
  font-weight: normal
`;

export const TeamName = styled.span`
  font-weight: bold
`;

export const Right = styled.div`
  display: inline-flex;
  padding: 15px 0;
  flex: 1;
  justify-content: flex-start;
`;

export const Left = styled.div`
  display: inline-flex;
  padding: 15px 0;
  flex: 1;
  justify-content: flex-end;
`;

export const TemaInfo = styled.div`
  margin-top: auto;
  line-height: 1.5;
  margin: 5px
`;
export const Center = styled.p`
  flex: 1;
  justify-content: center;
  margin: auto
`;

export const Score = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.td`
  text-align: left;
`;

export const Meeting = styled.td`
  text-align: right;
`;

export const Content = styled.tr`
  border-bottom: 1px solid #d6d6d6;
  line-height: 1.5;
`;
