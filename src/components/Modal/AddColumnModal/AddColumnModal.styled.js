/** @format */

import styled from '@emotion/styled';
import { Form, ErrorMessage, Field } from 'formik';
import Icon from '../../Icon/index';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const ModalTitle = styled.p`
	color: #ffffff;
	font-size: 18px;
	margin-bottom: 24px;
`;
export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	@media (max-width: 375px) {
		width: 100%;
	}
	width: 350px;
	border-radius: 8px;
	background: #151515;
	padding: 24px;
`;

export const CloseIcon = styled(Icon)`
	width: 18px;
	height: 18px;
	stroke: rgba(255, 255, 255, 1);
	cursor: pointer;
`;

export const StyledFormField = styled(Field)`
	padding: 14px 18px;
	background: inherit;
	outline: none;
	border-radius: 8px;
	border: 1px solid rgb(190, 219, 176, 0.5);
	color: #ffffff;
	margin-bottom: 24px;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
	color: red;
`;
export const AddIcon = styled(Icon)`
	width: 14px;
	height: 14px;
	stroke: rgba(255, 255, 255, 1);
	cursor: pointer;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	border-radius: 5px;
	width: 28px;
	height: 28px;
	background-color: black;
	margin-right: 8px;
`;
export const BtnAdd = styled.button`
	display: flex;
	width: 100%;
	padding: 14px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: #bedbb0;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;

	&:hover,
	&:focus {
		background: rgba(157, 200, 136, 1);
	}
`;

export const customStyles = {
	overlay: {
		backgroundColor: 'rgba(78, 74, 72, 0.6)',
	},
	content: {
		position: 'relative',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		borderRadius: 5,
		border: '1px solid #151515',
		backgroundColor: '#151515',
		boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
	},
};
