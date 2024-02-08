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
