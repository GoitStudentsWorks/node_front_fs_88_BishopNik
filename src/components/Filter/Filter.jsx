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
	Input,
	Label,
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
				<RadioButton>
					<Input
						type='radio'
						value='without'
						checked={selectedOption === 'without'}
						onChange={handleOptionChange}
						id='without'
					/>
					<Label for='without' color='rgba(255, 255, 255, 0.3)'>
						Without priority
					</Label>
				</RadioButton>
				<RadioButton>
					<Input
						type='radio'
						value='low'
						checked={selectedOption === 'low'}
						onChange={handleOptionChange}
						id='low'
					/>
					<Label for='low' color='rgba(143, 161, 208, 1)'>
						Low
					</Label>
				</RadioButton>
				<RadioButton>
					<Input
						type='radio'
						value='medium'
						checked={selectedOption === 'medium'}
						onChange={handleOptionChange}
						id='medium'
					/>
					<Label for='medium' color='rgba(224, 156, 181, 1)'>
						Medium
					</Label>
				</RadioButton>
				<RadioButton>
					<Input
						type='radio'
						value='high'
						checked={selectedOption === 'high'}
						onChange={handleOptionChange}
						id='high'
					/>
					<Label for='high' color='rgba(190, 219, 176, 1)'>
						High
					</Label>
				</RadioButton>
			</RadioButtonGroup>
		</ModalContainer>
	);
};
