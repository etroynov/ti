import styled from "styled-components";

export const Container = styled.div`
	display: grid ;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 60px 60px max-content 150px ;
	grid-template-areas: 
		". nav-bar nav-bar nav-bar nav-bar ."
		". main main main main ."
		". body body body commercial ."
		". footer footer footer footer ."

`;
export const Footer = styled.div`
	grid-area: footer;
	background-color: #f8f8f8

`
export const NavBar = styled.div`
	grid-area: nav-bar;
	border-bottom: 1px solid #e5e5e5;
	background-color: white
`

export const Main = styled.div`
	grid-area: main;
	border-bottom: 1px solid #e5e5e5;
	background-color: white;
`

export const Body = styled.div`
	display: inline-block;
	grid-area: body;
	border-bottom: 1px solid #e5e5e5;
	background-color: white
`

export const Commercial = styled.div`
	grid-area: commercial;
	border-bottom: 1px solid #e5e5e5;
	background-color: white;
	border-left: 1px solid #e5e5e5
`
