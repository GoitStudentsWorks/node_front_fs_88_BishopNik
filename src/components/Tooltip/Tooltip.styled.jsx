/** @format */

import styled from 'styled-components';

export const TooltipContent = styled.div`
	position: relative;
	outline: none;
	background:${props => props.theme.popup.background};
	color: ${props => props.theme.popup.textSecondary};
	padding: 24px;
	border-radius: 8px solid rgba(17, 17, 17, 0.1);
	width: 135px;
	height: 86px;
	margin: 0 auto;
	padding: 18px;

	/* background: ${props => props.theme.popup.background};
	text-align: center;
	border-radius: 8px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	width: 120px; */
`;

export const TooltipButton = styled.button`
	background-color: transparent;
	color: ${props => props.theme.popup.textSecondary};;
	border: none;
	cursor: pointer;

	&:hover,
	&:focus {
		color: ${props => props.theme.popup.textAccent};
	}
`;

export const Icon = styled.svg`
	width: 16px;
	height: 16px;
	stroke:${props => props.theme.popup.textSecondary};
	cursor: pointer;

	&:hover,
	&:focus {
		stroke: ${props => props.theme.popup.textAccent};
	}
`;
