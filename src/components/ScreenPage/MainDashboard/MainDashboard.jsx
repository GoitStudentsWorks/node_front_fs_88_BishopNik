/** @format */

import React, { useState } from 'react';
import {
  BoardContainer,
  BtnAddColumn,
  SvagAddColumn,
  StyledIconAdd,
} from './MainDashboard.styled';
import { AddColumnModal } from 'components/Modal';
import { Columns } from '../Columns/Columns';
import { useParams } from 'react-router-dom';
import { useColumns } from 'hooks';
import { useSelector } from 'react-redux';
import { boardsState } from 'redux/boards/selectors';

const MainDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { board } = useParams();
  const { allColumns } = useColumns();

  const boards = useSelector(boardsState);
  const selectedBoard = boards.find(item => item._id === board);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  console.log(board);
  return (
    <BoardContainer backgroundId={selectedBoard?.background}>
      <Columns board={board}>
        <BtnAddColumn type="button" onClick={handleOpenModal}>
          <StyledIconAdd>
            <SvagAddColumn name="plus" />
          </StyledIconAdd>
          <span>Add {allColumns.length ? 'another' : null} column</span>
        </BtnAddColumn>
      </Columns>
      <AddColumnModal
        board={board}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </BoardContainer>
  );
};

export default MainDashboard;
