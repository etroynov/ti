/*!
 * Dependencies
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const Container = styled.div`
	display: grid ;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 60px 60px max-content 150px ;
`;

export const Footer = styled.div`
	grid-column-start: 2;
	grid-column-end: 8;
	grid-row-start: 4;
	grid-row-end: 5;
	background-color: #f8f8f8;

`;

export const NavBar = styled.div`
	grid-column-start: 2;
	grid-column-end: 8;
	grid-row-start: 1;
	grid-row-end: 2;
	border-bottom: 1px solid #e5e5e5;
	background-color: white;
`;

export const Main = styled.div`
	grid-column-start: 2;
	grid-column-end: 8;
	grid-row-start: 2;
	grid-row-end: 3;
	border-bottom: 1px solid #e5e5e5;
	background-color: white;
`;

export const Body = styled.div`
	display: inline-block;
	grid-column-start: 2;
	grid-column-end: 8;
	grid-row-start: 3;
	grid-row-end: 4;
	border-bottom: 1px solid #e5e5e5;
	background-color: white;
`;

export const Commercial = styled.div`
	grid-area: commercial;
	border-bottom: 1px solid #e5e5e5;
	background-color: white;
	border-left: 1px solid #e5e5e5;
`;

export const CardList = styled.div`
	background-color: red;
	grid-column-start: 1;
	grid-column-end: 5;
`;

export const CardListCommercial = styled.div`
	grid-column-start: 5;
	grid-column-end: 6;
`;
