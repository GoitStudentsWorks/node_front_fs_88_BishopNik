/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin-right: 14px;
	cursor: pointer;
`;

export const Text = styled.span`
	font-family: Poppins;
	color: ${props => props.theme.popupTextMain};
	font-size: 14px;
	font-weight: 500;
	letter-spacing: -0.28px;
`;

export const IconThemeMenu = styled(Icon)`
	width: 16px;
	height: 16px;
	stroke:  ${props => props.theme.popupIcon};
	transition: all 250ms linear;
	fill: transparent;

	${props => props.isOpen && 'transform: rotate(-180deg)'};
`;

export const PopupBlock = styled.ul`
	position: absolute;
	bottom: -124px;
	left: 50%;
	transform: translateX(-50%);
	display: inline-flex;
	padding: 18px 44px 18px 18px;
	flex-direction: column;
	justify-content: center;
	border-radius: 8px;
	border: 1px solid ${props => props.theme.popupBorder};
	background: ${props => props.theme.popupBackground};
	box-shadow: ${props => props.theme.popupBoxShadow};
	gap: 4px;
	z-index: 99;
`;

export const PopupItem = styled.li`
	font-family: Poppins;
	color: ${props => props.theme.popupTextSecondary};
	font-size: 14px;
	letter-spacing: -0.28px;
    list-style: none;
	&.active {
		color: ${props => props.theme.popupTextAccent};
	}

	cursor: pointer;
`;
