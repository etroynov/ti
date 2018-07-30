/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const List = styled.ul`
  margin: 0;
  padding: 20px;
  line-height: 2;
  border-bottom: 1px solid black;
  background-color: white;
  position: relative;
  list-style-type: none;
`;

export const Item = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    background-color: gainsboro;
    cursor: pointer;
  }
`;
