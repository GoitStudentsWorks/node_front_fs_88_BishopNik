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
	color: rgba(255, 255, 255, 0.8);
	font-size: 14px;
	font-weight: 500;
	letter-spacing: -0.28px;
`;

export const IconThemeMenu = styled(Icon)`
	width: 16px;
	height: 16px;
	stroke: rgba(255, 255, 255, 0.8);
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
	border: 1px solid rgba(190, 219, 176, 1);
	background: rgba(21, 21, 21, 1);
	box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
	gap: 4px;
	z-index: 99;
`;

export const PopupItem = styled.li`
	font-family: Poppins;
	color: rgba(255, 255, 255, 0.5);
	font-size: 14px;
	letter-spacing: -0.28px;
    list-style: none;
	&.active {
		color: rgba(190, 219, 176, 1);
	}

	cursor: pointer;
`;
