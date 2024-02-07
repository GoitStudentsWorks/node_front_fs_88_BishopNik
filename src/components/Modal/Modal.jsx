/** @format */

import React, { useContext } from 'react';
import Modal from 'react-modal';
import { ModalMain } from './Modal.styled';
import { MainContext } from 'components/Helpers';

Modal.setAppElement('#modal-root');

const ModalWindow = ({ children, isOpen, onRequestClose, style }) => {
	const { setIsOpenSidebar } = useContext(MainContext);

	if (isOpen) setIsOpenSidebar(false);

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
