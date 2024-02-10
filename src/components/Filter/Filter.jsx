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

	return (
		<ModalContainer>
			<TitleBox>
				<Title>Filters</Title>
			</TitleBox>

			<CloseButton type='button' onClick={() => setIsOpen(false)}>
				<IconClose name='close' />
			</CloseButton>
			<div>
				<LinkShowAll href='URL'>Show all</LinkShowAll>
			</div>
			<TitleRadioButtons>Label color</TitleRadioButtons>
			<RadioButtonGroup>
				<RadioButton>
					<input
						type='radio'
						value='without'
						checked={selectedOption === 'without'}
						onChange={handleOptionChange}
					/>
					Without priority
				</RadioButton>
				<RadioButton>
					<input
						type='radio'
						value='Low'
						checked={selectedOption === 'Low'}
						onChange={handleOptionChange}
					/>
					Low
				</RadioButton>
				<RadioButton>
					<input
						type='radio'
						value='Medium'
						checked={selectedOption === 'Medium'}
						onChange={handleOptionChange}
					/>
					Medium
				</RadioButton>
				<RadioButton>
					<input
						type='radio'
						value='High'
						checked={selectedOption === 'High'}
						onChange={handleOptionChange}
					/>
					High
				</RadioButton>
			</RadioButtonGroup>
		</ModalContainer>
	);
};
