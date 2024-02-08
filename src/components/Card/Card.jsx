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

export const Card = () => {
  return (
    <>
      <CardContainer>
        <PriorityLine />
        <CardContent>
          <TextContent>
            <Title>The Watch Spot Design</Title>
            <DescriptionText>
              Conduct in-depth research and analysis on the project's topic,
              gather relevant data, and identify key insights to inform
              decision-making and project planning.
            </DescriptionText>
          </TextContent>
          <Info>
            <Priority>
              <InfoTitle>Priority</InfoTitle>
              <PriorityLevel>Medium</PriorityLevel>
            </Priority>
            <Dedline>
              <InfoTitle>Deadline</InfoTitle>
              <Date>date</Date>
            </Dedline>
            <BellIcon name="bell" />
            <IconContainer>
              <MoveIcon name="process-task" />
              <EditIcon name="edit" />
              <DelIcon name="delete" />
            </IconContainer>
          </Info>
        </CardContent>
      </CardContainer>
    </>
  );
};
