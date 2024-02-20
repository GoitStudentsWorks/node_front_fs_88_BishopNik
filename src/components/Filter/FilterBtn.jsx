/** @format */

import React, { useState } from 'react';
import { ButtonFilter, FiltersIcon, TextButton } from './FiltersBtn.styled';
import { FilterModal } from 'components/Modal';

export const FilterBtn = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handlerOpenModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<ButtonFilter type='button' onClick={handlerOpenModal}>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			<FilterModal isModalOpen={isModalOpen} setIsOpen={() => setIsModalOpen(false)} />
		</>
	);
};
