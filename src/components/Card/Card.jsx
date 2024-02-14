/** @format */

import React, { useState } from 'react';
import moment from 'moment';
import { GetColor } from 'components/Helpers';
import Tooltip from 'components/Tooltip';
import { StyleSheetManager } from 'styled-components';
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

	const deadLineString = deadline => {
		if (!deadline || typeof deadline !== 'number') return '--/--/--';
		const date = moment(deadline);
		return date.format('DD/MM/YYYY');
	};

	const active = time => {
		if (!deadline) return 0;
		return moment(time).date();
	};

	const priorityLevel = GetColor(priority);

	return (
		<>
			<StyleSheetManager shouldForwardProp={prop => prop !== 'active' && prop !== 'color'}>
				<CardContainer>
					<PriorityLine style={{ backgroundColor: priorityLevel.color }} />
					<CardContent>
						<TextContent>
							<Title>{name}</Title>
							<DescriptionText>{text}</DescriptionText>
						</TextContent>
						<Info>
							<Priority>
								<InfoTitle>Priority</InfoTitle>
								<PriorityLevel color={priorityLevel.color}>
									{priorityLevel.name}
								</PriorityLevel>
							</Priority>
							<Dedline>
								<InfoTitle>Deadline</InfoTitle>
								<Date>{deadLineString(deadline)}</Date>
							</Dedline>
							<BellIcon
								name='bell'
								active={active(deadline) <= active(moment()) && deadline}
							/>
							<IconContainer>
								<MoveIcon
									name='process-task'
									onClick={() => setIsTooltipOpen(true)}
								/>
								<EditIcon name='edit' onClick={editCard} />
								<DelIcon name='delete' onClick={deleteCard} />
							</IconContainer>
							<Tooltip
								isOpen={isTooltipOpen}
								onRequestClose={closeTooltip}
								card={item}
							/>
						</Info>
					</CardContent>
				</CardContainer>
			</StyleSheetManager>
		</>
	);
};
