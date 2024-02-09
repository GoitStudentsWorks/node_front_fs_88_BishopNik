/** @format */

import React, { useState } from 'react';
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
  RadioButtonStyled,
} from './Filter.styled.jsx';

export const Filter = ({ setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState('Without priority');

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <ModalContainer>
      <TitleBox>
        <Title>Filters</Title>
      </TitleBox>

      <CloseButton type="button" onClick={() => setIsOpen(false)}>
        <IconClose name="close" />
      </CloseButton>
      <div>
        <LinkShowAll href="URL">Show all</LinkShowAll>
      </div>
      <TitleRadioButtons>Label color</TitleRadioButtons>
      <RadioButtonGroup>
        <RadioButton>
          <input
            type="radio"
            value="Without priority"
            checked={selectedOption === 'Without priority'}
            onChange={handleOptionChange}
          />
          <RadioButtonStyled color="rgba(255, 255, 255, 0.3)" />
          Without priority
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="Low"
            checked={selectedOption === 'Low'}
            onChange={handleOptionChange}
          />
          <RadioButtonStyled color="rgba(143, 161, 208, 1)" />
          Low
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="Medium"
            checked={selectedOption === 'Medium'}
            onChange={handleOptionChange}
          />
          <RadioButtonStyled color="rgba(224, 156, 181, 1)" />
          Medium
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="High"
            checked={selectedOption === 'High'}
            onChange={handleOptionChange}
          />
          <RadioButtonStyled color="rgba(190, 219, 176, 1)" />
          High
        </RadioButton>
      </RadioButtonGroup>
    </ModalContainer>
  );
};
