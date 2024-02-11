/** @format */

import styled from 'styled-components';

export const TooltipContent = styled.div`
	position: relative;
	outline: none;
	background: ${props => props.theme.modal.backgroundMain};
	color: ${props => props.theme.help.modalTextMain};
	padding: 24px;
	border-radius: 8px;
	min-width: 320px;
	@media (max-width: 767px) {
		width: 335px;
	}
	@media (min-width: 768px) {
		width: 350px;
	}
	margin: 0 auto;
	/* background: ${({ theme }) => theme.modal.backgroundMain};
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
	color: #bedbb0;
	border: none;
	cursor: pointer;

	&:hover,
	&:focus {
		color: #fff;
	}
`;

export const Icon = styled.svg`
	width: 16px;
	height: 16px;
	stroke: ${props => props.theme.sidebar.projectIcon};
	cursor: pointer;

	&:hover,
	&:focus {
		stroke: ${props => props.theme.sidebar.textAccent};
	}
`;
