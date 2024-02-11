/** @format */

import React, { useState } from 'react';
import {
  BoardContainer,
  BtnAddColumn,
  SvagAddColumn,
  StyledIconAdd,
  WrapperBoardContainer,

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
  const { allBoards } = useBoards();

  const selectedBoard = allBoards.find(item => item._id === board);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
 
  return (
    <WrapperBoardContainer>
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
    </WrapperBoardContainer>
  );
};

export default MainDashboard;
