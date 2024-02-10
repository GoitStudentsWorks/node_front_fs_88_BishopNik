/** @format */

import React, { useContext, useState } from 'react';
import { MainContext } from 'components/Helpers';
import {
	CloseButton,
	IconClose,
	LinkShowAll,
	ModalContainer,
	RadioButton,
	RadioButtonGroup,
	Title,
	TitleBox,
	TitleRadioButtons,
} from './Filter.styled.jsx';

export const Filter = ({ setIsOpen }) => {
	const { filter, setFilter } = useContext(MainContext);
	const [selectedOption, setSelectedOption] = useState(filter);

	const handleOptionChange = ({ target }) => {
		setSelectedOption(target.value);
		setFilter(target.value);
	};

	const handlerShowAll = () => {
		setFilter('all');
		setIsOpen(false);
	};
	return (
		<ModalContainer>
			<TitleBox>
				<Title>Filters</Title>
			</TitleBox>
			<CloseButton type='button' onClick={() => setIsOpen(false)}>
				<IconClose name='close' />
			</CloseButton>
			<div>
				<LinkShowAll onClick={handlerShowAll}>Show all</LinkShowAll>
			</div>
			<TitleRadioButtons>Label color</TitleRadioButtons>
			<RadioButtonGroup>
				<RadioButton color='rgba(255, 255, 255, 0.3)'>
					<input
						type='radio'
						value='without'
						checked={selectedOption === 'without'}
						onChange={handleOptionChange}
					/>
					Without priority
				</RadioButton>
				<RadioButton color='rgba(143, 161, 208, 1)'>
					<input
						type='radio'
						value='low'
						checked={selectedOption === 'low'}
						onChange={handleOptionChange}
					/>
					Low
				</RadioButton>
				<RadioButton color='rgba(224, 156, 181, 1)'>
					<input
						type='radio'
						value='medium'
						checked={selectedOption === 'medium'}
						onChange={handleOptionChange}
					/>
					Medium
				</RadioButton>
				<RadioButton color='rgba(190, 219, 176, 1)'>
					<input
						type='radio'
						value='high'
						checked={selectedOption === 'high'}
						onChange={handleOptionChange}
					/>
					High
				</RadioButton>
			</RadioButtonGroup>
		</ModalContainer>
	);
};
