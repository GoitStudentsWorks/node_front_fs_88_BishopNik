/** @format */

import React, { useState } from 'react';
import moment from 'moment';
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

  const deadLineString = deadline => {
    if (!deadline || typeof deadline !== 'number') return '--/--/--';
    const date = moment(deadline);
    return date.format('DD/MM/YYYY');
  };

  const active = time => {
    if (!deadline) return 0;
    return moment(time).date();
  };

  const getColor = priority => {
    switch (priority) {
      case 'without':
        return {
          color: 'rgba(255, 255, 255, 0.3)',
          name: 'Without priority',
        };
        break;
      case 'low':
        return {
          color: 'rgba(143, 161, 208, 1)',
          name: 'Low',
        };
        break;
      case 'medium':
        return {
          color: 'rgba(224, 156, 181, 1)',
          name: 'Medium',
        };
        break;
      case 'high':
        return {
          color: 'rgba(190, 219, 176, 1)',
          name: 'High',
        };
        break;
      default:
        return {
          color: 'rgba(255, 255, 255, 0.3)',
          name: 'Without priority',
        };
    }
  };

  return (
    <>
      <CardContainer>
        <PriorityLine style={{ backgroundColor: getColor(priority).color }} />
        <CardContent>
          <TextContent>
            <Title>{name}</Title>
            <DescriptionText>{text}</DescriptionText>
          </TextContent>
          <Info>
            <Priority>
              <InfoTitle>Priority</InfoTitle>
              <PriorityLevel color={getColor(priority).color}>
                {getColor(priority).name}
              </PriorityLevel>
            </Priority>
            <Dedline>
              <InfoTitle>Deadline</InfoTitle>
              <Date>{deadLineString(deadline)}</Date>
            </Dedline>
            <BellIcon
              name="bell"
              active={active(deadline) === active(moment()) && deadline}
            />
            <IconContainer>
              <MoveIcon
                name="process-task"
                onClick={() => setIsTooltipOpen(true)}
              />
              <EditIcon name="edit" onClick={editCard} />
              <DelIcon name="delete" onClick={deleteCard} />
            </IconContainer>
            <Tooltip
              isOpen={isTooltipOpen}
              onRequestClose={closeTooltip}
              card={item}
            />
          </Info>
        </CardContent>
      </CardContainer>
    </>
  );
};
