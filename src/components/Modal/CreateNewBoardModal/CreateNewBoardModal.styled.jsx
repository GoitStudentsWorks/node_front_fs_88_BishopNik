/** @format */

import { Form, ErrorMessage, Field } from 'formik';
import Icon from '../../Icon/index';

import styled from 'styled-components';

export const Title = styled.p`
	color: ${props => props.theme.help.modalTextMain};
	background:${props => props.theme.modal.backgroundMain};
	margin: 0;
	padding-bottom: 24px;
	font-size: 18px;
	font-weight: 500;
`;
export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CloseIcon = styled(Icon)`
	width: 18px;
	height: 18px;
	stroke:${props => props.theme.modal.iconClose};
	cursor: pointer;
`;

export const TitleIcons = styled.span`
	font-size: 14px;
	font-weight: 500px;
	color: ${props => props.theme.help.modalTextMain};
	padding-bottom: 14px;
`;

export const TitleBackground = styled.span`
	font-size: 14px;
	font-weight: 500;
	color:${props => props.theme.help.modalTextMain};
	padding-bottom: 14px;
`;

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	padding-bottom: 24px;
	.invisible {
		visibility: hidden;
		position: absolute;
	}
`;

export const BackgroundContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	padding-bottom: 40px;
	.invisible {
		visibility: hidden;
		position: absolute;
	}
	flex-wrap: wrap;
`;

export const TypesOfIcon = styled(Icon)`
	width: 18px;
	height: 18px;
	stroke: ${props => props.theme.modal.icon};
`;

export const TypesOfBackground = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 5px;
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	@media (max-width: 375px) {
		width: 100%;
	}
	width: 400px;
	border-radius: 8px;
	background: ${props => props.theme.modal.backgroundMain};
	padding: 24px;
	
`;

// export const NavBox = styled.div`
// 	display: flex;
// 	gap: 14px;
// 	margin-bottom: 40px;
// `;

export const LabelBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-bottom: 24px;
`;

export const LabelRadio = styled.label`
	margin: 0;
	cursor: pointer;
`;

export const ErrMessageStyled = styled(ErrorMessage)`
	color: red;
`;

export const StyledField = styled(Field)`
	color: ${props => props.theme.profile.textMain};
	border-radius: 8px;
	border: 1px solid ${props => props.theme.profile.inputBorder};
	padding: 14px 0px 14px 18px;
	opacity: 0.4;
	background: ${props => props.theme.modal.backgroundSecondary};
	width: 100%;
	box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

	&:hover {
    opacity: 1;

  color: ${props => props.theme.modal.textMain};

  &:focus {
    border-color:${props => props.theme.modal.textAccent};
  }

  ::placeholder {
    color: ${props => props.theme.modal.textSecondary}; 
`;

export const Button = styled.button`
	display: flex;
	width: 100%;
	padding: 14px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	border: none;
	background: ${props => props.theme.help.buttonBackground};
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;

	&:hover,
	&:focus {
		background: ${props => props.theme.sidebar.hoverLogout};
	}
`;
export const AddIcon = styled(Icon)`
	width: 14px;
	height: 14px;
	stroke:  ${props => props.theme.modal.plusColor};
	cursor: pointer;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px;
	border-radius: 5px;
	width: 28px;
	height: 28px;
	background-color: ${props => props.theme.sidebar.addButtonColor};
	margin-right: 8px;
`;

export const ButtonText = styled.span`
	color: ${props => props.theme.addcolum.buttonBackground};
	text-align: center;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px;
`;
