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
} from './Filter.styled.jsx';

export const Filter = ({ setIsOpen }) => {
	const { filter, setFilter } = useContext(MainContext);
	const [selectedOption, setSelectedOption] = useState(filter);

	const handleOptionChange = ({ target }) => {
		setSelectedOption(target.value);
		setFilter(target.value);
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
        <RadioButton color="rgba(255, 255, 255, 0.3)">
          <input
            type="radio"
            value="Without priority"
            checked={selectedOption === 'Without priority'}
            onChange={handleOptionChange}
          />
          Without priority
        </RadioButton>
        <RadioButton color="rgba(143, 161, 208, 1)">
          <input
            type="radio"
            value="Low"
            checked={selectedOption === 'Low'}
            onChange={handleOptionChange}
          />
          Low
        </RadioButton>
        <RadioButton color="rgba(224, 156, 181, 1)">
          <input
            type="radio"
            value="Medium"
            checked={selectedOption === 'Medium'}
            onChange={handleOptionChange}
          />
          Medium
        </RadioButton>
        <RadioButton color="rgba(190, 219, 176, 1)">
          <input
            type="radio"
            value="High"
            checked={selectedOption === 'High'}
            onChange={handleOptionChange}
          />
          High
        </RadioButton>
      </RadioButtonGroup>
    </ModalContainer>
  );
};
