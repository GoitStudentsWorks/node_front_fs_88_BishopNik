/** @format */

import React from 'react';

import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import { Filter } from 'components/Filter';

export const FilterModal = ({ isModalOpen, setIsOpen }) => {
	return (
		<ModalWindow isOpen={isModalOpen} onRequestClose={setIsOpen} style={customStyles}>
			<Filter setIsOpen={setIsOpen} />
		</ModalWindow>
	);
};
