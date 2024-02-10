import React, { useState } from 'react';
import { TooltipWrapper, TooltipButton, TooltipContent } from './Tooltip.styled.jsx';
import Icon from 'components/Icon/Icon.jsx';

const Tooltip = ({ isOpen, onRequestClose, onClick }) => {
    const [setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onRequestClose(); // При кліку на опцію закриваємо Tooltip
  };

  return (
    <TooltipWrapper isOpen={isOpen}>
      {isOpen && (
        <TooltipContent>
          <TooltipButton onClick={() => handleOptionClick('inProgress')}>
            In Progress
            <Icon name="process-task" /> {/* Використовуємо компонент Icon */}
          </TooltipButton>
          <TooltipButton onClick={() => handleOptionClick('done')}>
            Done
            <Icon name="process-task" /> {/* Використовуємо компонент Icon */}
          </TooltipButton>
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;