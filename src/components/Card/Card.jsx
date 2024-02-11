/** @format */

import React, { useState } from 'react';
import Tooltip from 'components/Tooltip';
import {
	CardContainer,
	PriorityLine,
	CardContent,
	TextContent,
	Title,
	DescriptionText,
	Info,
	Priority,
	PriorityLevel,
	Dedline,
	InfoTitle,
	Date,
	IconContainer,
	BellIcon,
	MoveIcon,
	EditIcon,
	DelIcon,
} from './Card.styled';

export const Card = ({ item, deleteCard, editCard }) => {
	const { name, priority, deadline, text } = item;
	const [isTooltipOpen, setIsTooltipOpen] = useState(false);

	const closeTooltip = () => {
		setIsTooltipOpen(false);
	};

	return (
		<>
			<CardContainer>
				<PriorityLine />
				<CardContent>
					<TextContent>
						<Title>{name}</Title>
						<DescriptionText>
							{text}
						</DescriptionText>
					</TextContent>
					<Info>
						<Priority>
							<InfoTitle>Priority</InfoTitle>
							<PriorityLevel>{priority}</PriorityLevel>
						</Priority>
						<Dedline>
							<InfoTitle>Deadline</InfoTitle>
							<Date>{deadline}</Date>
						</Dedline>
						<BellIcon name='bell' />
						<IconContainer>
							<MoveIcon name='process-task' onClick={() => setIsTooltipOpen(true)} />
							<EditIcon name='edit' onClick={editCard} />
							<DelIcon name='delete' onClick={deleteCard} />
						</IconContainer>
						<Tooltip isOpen={isTooltipOpen} onRequestClose={closeTooltip} card={item} />
					</Info>
				</CardContent>
			</CardContainer>
		</>
	);
};
