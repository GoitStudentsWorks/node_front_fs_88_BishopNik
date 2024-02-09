/** @format */

import React, { useState } from 'react';
import {
  BoardContainer,
  BtnAddColumn,
  SvagAddColumn,
  StyledIconAdd,
  MainWrapper,
} from './MainDashboard.styled';
import icon from 'components/Icon/icon-spraite.svg';
import { AddColumnModal } from 'components/Modal';
import { Columns } from '../Columns';
import { useParams } from 'react-router-dom';

const MainDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { board } = useParams();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <BoardContainer>
      <MainWrapper>
        <Columns board={board} />
        <BtnAddColumn type="button" onClick={handleOpenModal}>
          <StyledIconAdd>
            <SvagAddColumn width="14" height="14">
              <use xlinkHref={`${icon}#icon-plus`} />
            </SvagAddColumn>
          </StyledIconAdd>
          <span>Add another column</span>
        </BtnAddColumn>
      </MainWrapper>
      <AddColumnModal
        board={board}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />{' '}
    </BoardContainer>
  );
};

export default MainDashboard;
