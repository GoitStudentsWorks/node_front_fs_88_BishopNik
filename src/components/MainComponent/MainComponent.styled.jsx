/** @format */

import styled from 'styled-components';

export const TextEmptyBoard = styled.p`
	max-width: 100%;
	width: 375px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 292px;
	padding: 0 20px;
	color: ${props => props.theme.popup.textSecondary};
	font-size: 12px;
	font-weight: 400;
	line-height: 1.3;
	letter-spacing: -0.02em;
	text-align: center;

	@media screen and (min-width: 768px) {
		margin-top: 408px;
		padding: 0;
		width: 486px;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.3;
		letter-spacing: -0.02em;
		text-align: center;
	}

	@media screen and (min-width: 1440px) {
		margin-top: 281px;
		padding: 0;
	}
`;

export const ButtonCreateBoard = styled.span`
	background-color: transparent;
	color: ${props => props.theme.popup.textAccent};
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	letter-spacing: -0.2px;
	text-align: center;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		font-size: 14px;
		font-weight: 400;
		line-height: 18px;
		letter-spacing: -0.2px;
		text-align: center;
	}
`;
