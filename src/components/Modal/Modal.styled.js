/** @format */

import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalMain = styled(Modal)`
	width: fit-content;
	height: fit-content;
`;

export const customStyles = {
	overlay: {
		backgroundColor: 'rgba(78, 74, 72, 0.6)',
		zIndex: '999',
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
