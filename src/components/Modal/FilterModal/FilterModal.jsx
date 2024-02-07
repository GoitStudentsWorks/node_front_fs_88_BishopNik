/** @format */

import React from 'react';

import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import { Filter } from 'components/Filter';

const FilterModal = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<ModalWindow
			isOpen={isModalOpen}
			onRequestClose={() => setIsModalOpen(false)}
			style={customStyles}
		>
			<Filter />
		</ModalWindow>
	);
};

export default FilterModal;
