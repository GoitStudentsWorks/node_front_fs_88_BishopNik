import React from 'react';

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

export const Card = ({ item, deleteCard,editCard }) => {
  const { name, priority, deadline } = item;

  return (
    <>
      <CardContainer>
        <PriorityLine />
        <CardContent>
          <TextContent>
            <Title>{name}</Title>
            <DescriptionText>
              Conduct in-depth research and analysis on the project's topic,
              gather relevant data, and identify key insights to inform
              decision-making and project planning.
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
            <BellIcon name="bell" />
            <IconContainer>
              <MoveIcon name="process-task" />
              <EditIcon name="edit" onClick={editCard} />
              <DelIcon name="delete" onClick={deleteCard} />
            </IconContainer>
          </Info>
        </CardContent>
      </CardContainer>
    </>
  );
};
