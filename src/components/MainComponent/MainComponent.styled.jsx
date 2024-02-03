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
	stroke: rgba(255, 255, 255, 0.8);
`;

export const TextButton = styled.span`
	color: rgba(255, 255, 255, 0.8);
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px;
`;

export const TextEmptyBoard = styled.p`
	max-width: 100%;
	width: 335px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 292px;
	color: rgba(255, 255, 255, 0.5);
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px; /* 128.571% */
	letter-spacing: -0.28px;

	@media screen and (min-width: 768px) {
		margin-top: 408px;
		width: 486px;
	}

	@media screen and (min-width: 1440px) {
		margin-top: 281px;
	}
`;

export const ButtonCreateBoard = styled.button`
	border: none;
	background-color: transparent;
	color: #bedbb0;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: -0.28px;
	cursor: pointer;
`;
