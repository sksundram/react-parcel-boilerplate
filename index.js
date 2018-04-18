import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Greeting = styled.h1`
	text-align: center;
	color: firebrick;
`;
const Hello = ({ name }) => <Greeting>Hello {name}</Greeting>;

render(
	<Hello name='World' />,
	document.getElementById('root')
);
