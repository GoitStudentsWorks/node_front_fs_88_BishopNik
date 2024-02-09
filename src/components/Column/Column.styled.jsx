/** @format */

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 335px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	color: ${props => props.theme.colum.textMain};
	font-size: 18px;
`;
