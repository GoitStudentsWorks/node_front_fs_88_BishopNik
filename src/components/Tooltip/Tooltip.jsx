/** @format */

import React from 'react';
import ModalWindow, { customStyles } from '../Modal';
import { TooltipButton, TooltipContent, IconProcess } from './Tooltip.styled.jsx';
import { useColumns } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateCard } from 'redux/cards/operations';

const Tooltip = ({ isOpen, onRequestClose, card }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();
	const { _id: id, columnId: oldColumnId, name } = card;

	const handleClick = columnId => {
		dispatch(updateCard({ id, columnId, name, oldColumnId }));
		onRequestClose();
	};

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
			<TooltipContent>
				{allColumns?.map(col => (
					<React.Fragment key={col._id}>
						{oldColumnId !== col._id && (
							<TooltipButton onClick={() => handleClick(col._id)}>
								{col.name}
								<IconProcess name='process-task' />
							</TooltipButton>
						)}
					</React.Fragment>
				))}
			</TooltipContent>
		</ModalWindow>
	);
};

export default Tooltip;
