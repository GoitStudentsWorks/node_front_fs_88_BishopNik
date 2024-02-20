/** @format */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon';

export const IconLogoBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #161616;
	outline: none;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	@media (min-width: 768px) {
		width: 48px;
		height: 48px;
	}
`;

export const IconLogo = styled(Icon)`
	width: 20px;
	height: 20px;
	@media (min-width: 768px) {
		width: 24px;
		height: 24px;
	}
	stroke: rgba(255, 255, 255, 0.8);
	fill: #ffffff;
`;

export const AuthNavContainer = styled.div`
	background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #bedbb0 92.19%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 20px 0 20px;
	height: 100vh;
	margin-left: auto;
	margin-right: auto;
	min-width: 320px;
	width: 100vw;
`;

export const LogoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
	margin: 0;
`;

export const Text = styled.span`
	color: #161616;
	text-align: center;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
	width: 335px;
	margin-bottom: 48px;
	@media (max-width: 375px) {
		width: 100%;
	}
	@media (min-width: 768px) {
		width: 473px;
		letter-spacing: -0.28px;
	}
`;

export const Button = styled.button`
	padding: 14px 0px;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	color: black;
	border: none;
	border-radius: 8px;
	margin-bottom: 14px;
	display: flex;
	cursor: pointer;

	&:hover {
		background-color: #161616;
		color: white;
	}

	@media (max-width: 375px) {
		width: 100%;
	}
	width: 335px;
	@media (min-width: 768px) {
		width: 344px;
	}
`;

export const Link = styled(NavLink)`
	color: #fff;
	text-align: center;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px;
	text-decoration: none;
`;

export const LogoTitle = styled.h3`
	color: #161616;
	font-family: Poppins;
	font-size: 28px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -1.12px;
	@media (min-width: 768px) {
		font-size: 40px;
		letter-spacing: -1.6px;
	}
`;
