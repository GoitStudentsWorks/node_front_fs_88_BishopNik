/** @format */

import React from 'react';
import ModalWindow, { customStyles } from '../Modal';
import { TooltipButton, TooltipContent } from './Tooltip.styled.jsx';
import Icon from 'components/Icon/Icon.jsx';
import { useColumns } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateCard } from 'redux/cards/operations';

const Tooltip = ({ isOpen, onRequestClose, card }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const { _id: id } = card;
	console.log('🚀 ~ Tooltip ~ allColumn:', card);

	const handleClick = (newColumn, oldColumnId) => {
		dispatch(updateCard({ id, columnId: newColumn }));
		onRequestClose();
	};

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
			<TooltipContent>
				{allColumns?.map(col => (
					<TooltipButton key={col._id} onClick={() => handleClick(col._id)}>
						{col.name}
						<Icon name='process-task' />
					</TooltipButton>
				))}
			</TooltipContent>
		</ModalWindow>
	);
};

export default Tooltip;
