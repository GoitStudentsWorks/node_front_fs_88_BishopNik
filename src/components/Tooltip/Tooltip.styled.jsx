/** @format */

import styled from 'styled-components';

export const TooltipContent = styled.div`
    // position: absolute;
	outline: none;
	background:${props => props.theme.popup.background};
	min-width: 135px;
	height: 86px;
	margin: 0 auto;
	padding: 15px;
    z-index: 1000;

`;

export const TooltipButton = styled.button`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
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
