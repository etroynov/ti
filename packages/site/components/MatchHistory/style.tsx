/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const Container = styled.div`
  margin: 10px
`;

export const TitleBorder = styled.div`
  margin-top: 50px;
  border-bottom: 2px solid black;
`;

export const Title = styled.h4`
  text-align: left;
  color: #ff6f22;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Header = styled.tr`
  border-bottom: 2px solid #ff6f22;
  line-height: 2;
`;

export const LeftColumn = styled.th`
  text-align: left;
  width: 25%;
`;

export const CenterColumn = styled.th`
  text-align: center;
  width: 40%;
`;

export const RightColumn = styled.th`
  text-align: right;
  width: 35%;
`;
