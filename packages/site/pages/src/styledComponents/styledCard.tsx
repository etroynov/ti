import styled from "styled-components";

const Card = styled.div`
	border: 1px  solid #e5e5e5;
	width: 250px;
	float: left;
	margin: 20px;
	&:hover {
		cursor: pointer;
		border-color: black
	}
`;

const CardHeader = styled.div`
	width: 250px;
	height: 50px;
`;

const CardBody = styled.div`
	width: 250px;
	height: 150px;
`;

const CardFooter = styled.div`
	width: 250px;
	height: 50px;
`;

export { Card, CardHeader, CardBody, CardFooter }