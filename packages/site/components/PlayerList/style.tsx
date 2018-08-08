/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const Container = styled.div`
  margin: 10px;
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
  font-weight: normal;
`;

export const RightColumn = styled.th`
  text-align: right;
  font-weight: normal;
`;
export const CenterColumn = styled.th`
  text-align: center;
  font-weight: normal;
`;

export const Left = styled.td`
  text-align: left;
`;

export const Right = styled.td`
  text-align: right;
`;
export const Center = styled.td`
  text-align: center;
`;

export const Content = styled.tr`
  border-bottom: 1px solid #d6d6d6
`;
export const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin: auto;
`;

export const TeamAvatar = styled.img`
  width: 50px;
  height: 50px;
`;
export const PlayerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%
`;

export const TeamName = styled.span`
`;
export const PlayerName = styled.span`
`;

export const TeamTitle = styled.p`
  margin: 0;
  font-weight: normal
`;
export const PlayerTitle = styled.p`
  margin: 0;
  font-weight: normal
`;

export const TeamContainer = styled.div`
  display: inline-flex;
  padding: 15px 0;
`;
export const PlayerContainer = styled.div`
  display: inline-flex;
  padding: 15px 0;
`;

export const TemaInfo = styled.div`
  margin-top: auto;
  line-height: 1.5;
  margin-left: 10px;
  padding: inherit;
`;
export const PlayerInfo = styled.div`
  margin-top: auto;
  line-height: 1.5;
  margin-left: 10px;
`;
