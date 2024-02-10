/** @format */

// MainDashboard.styled.js
import styled from 'styled-components';
import Icon from 'components/Icon';

export const BoardContainer = styled.div`
	overflow-y: hidden;
	overflow-x: auto;
	display: flex;
	gap: 20px;
	padding: 0px 24px;
`;

export const BtnAddColumn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px 58px;
	font-size: 14px;
	font-weight: 500;
	border-radius: 8px;
	width: 334px;
	color: ${props => props.theme.help.modalTextMain};
	background-color: ${props => props.theme.profile.background};

	border: none;
	cursor: pointer;
	height: 58px;
`;

export const StyledIconAdd = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	margin-right: 8px;
	background-color: ${props => props.theme.addcolum.plusBackground};
	border-radius: 8px;
`;

export const SvagAddColumn = styled(Icon)`
	stroke: ${props => props.theme.addcolum.plusColor};
	width: 14px;
	height: 14px;
`;
