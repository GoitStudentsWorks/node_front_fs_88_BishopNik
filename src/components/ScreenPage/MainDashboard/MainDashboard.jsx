import React, { useState } from 'react';
import {
  BoardContainer,
  BtnAddColumn,
  SvagAddColumn,
  StyledIconAdd,
} from './MainDashboard.styled';
import icon from 'components/Icon/icon-spraite.svg';

import { AddColumnModal } from 'components/ScreenPage/MainDashboard/AddColumnModal/AddColumnModal';

const MainDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <BoardContainer>
      <BtnAddColumn type="button" onClick={handleOpenModal}>
        <StyledIconAdd>
          <SvagAddColumn width="14" height="14">
            <use xlinkHref={`${icon}#icon-plus`} />
          </SvagAddColumn>
        </StyledIconAdd>
        <span>Add another column</span>
      </BtnAddColumn>
      <AddColumnModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />{' '}
    </BoardContainer>
  );
};

export default MainDashboard;
