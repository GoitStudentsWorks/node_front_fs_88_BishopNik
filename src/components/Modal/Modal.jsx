/** @format */

import Modal from 'react-modal';
import { ModalMain } from './Modal.styled';

Modal.setAppElement('#modal-root');

const ModalWindow = ({ children, isOpen, onRequestClose, style }) => {
	return (
		<ModalMain
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={style}
			contentLabel='onRequestClose'
		>
			{children}
		</ModalMain>
	);
};

export default ModalWindow;
