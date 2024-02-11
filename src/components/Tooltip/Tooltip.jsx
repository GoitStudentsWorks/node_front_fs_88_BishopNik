/** @format */

import React from 'react';
import ModalWindow, { customStyles } from '../Modal';
import { TooltipButton, TooltipContent } from './Tooltip.styled.jsx';
import Icon from 'components/Icon/Icon.jsx';
import { useColumns } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateCard } from 'redux/cards/operations';

const Tooltip = ({ isOpen, onRequestClose }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	console.log('🚀 ~ Tooltip ~ allColumn:', allColumns);

	const handleOptionClick = id => {
		dispatch(updateCard());
		onRequestClose();
	};

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
			<TooltipContent>
				{allColumns?.map(col => (
					<TooltipButton key={col._id} onClick={() => handleOptionClick(col._id)}>
						{col.name}
						<Icon name='process-task' /> {/* Використовуємо компонент Icon */}
					</TooltipButton>
				))}
			</TooltipContent>
		</ModalWindow>
	);
};

export default Tooltip;
