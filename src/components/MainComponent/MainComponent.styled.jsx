/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const ButtonFilter = styled.button`
	position: absolute;
	top: 14px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		top: 20px;
		right: 32px;
	}

	@media screen and (min-width: 1440px) {
		top: 14px;
		right: 24px;
	}
`;

export const FiltersIcon = styled(Icon)`
	width: 16px;
	height: 16px;
	stroke: ${props => props.theme.popup.textMain};
`;

export const TextButton = styled.span`
	color: ${props => props.theme.popup.textMain};
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px; 
`;

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
	color: ${props => props.theme.popup.textAccent};;
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
