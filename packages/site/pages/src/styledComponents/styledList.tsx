import styled from "styled-components";

const List = styled.ul`
	margin: 0;
	padding: 20px;
	line-height: 2;
	border-bottom: 1px solid black;   
	background-color: white;
	position: relative;
	list-style-type: none
`;

const ListItem = styled.li`
	padding-left: 10px;
	padding-right: 10px
	&:hover {
		background-color: gainsboro;
		cursor: pointer;
	}
`;

export { List, ListItem }