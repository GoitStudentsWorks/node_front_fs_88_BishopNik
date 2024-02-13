/** @format */

import React from 'react';
import { StyleSheetManager } from 'styled-components';
import {
  BoardContainer,
  BtnAddColumn,
  SvagAddColumn,
  StyledIconAdd,
  // WrapperBoardContainer,
} from './MainDashboard.styled';
import { AddColumnModal } from 'components/Modal';
import { Columns } from '../Columns';
import { useParams } from 'react-router-dom';
import { useColumns, useBoards } from 'hooks';
import { columnsSlice } from 'redux/columns/columnsSlice';
import { createModalOpen } from 'redux/columns/selectors';
import { useDispatch, useSelector } from 'react-redux';

const MainDashboard = () => {
  const isModalOpen = useSelector(createModalOpen);
  const dispatch = useDispatch();
  const { board } = useParams();
  const { allColumns } = useColumns();
  const { allBoards } = useBoards();
  const selectedBoard = allBoards.find(item => item._id === board);

  const toggleModal = flag => {
    dispatch(columnsSlice.actions.setCreateModalOpen(flag));
  };
	
  console.log(isModalOpen)

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'backgroundId'}>
      {/* <WrapperBoardContainer> */}
      <BoardContainer backgroundId={selectedBoard?.background}>
        <Columns board={board}>
          <BtnAddColumn type="button" onClick={() => toggleModal(true)}>
            <StyledIconAdd>
              <SvagAddColumn name="plus" />
            </StyledIconAdd>
            <span>Add {allColumns.length ? 'another' : null} column</span>
          </BtnAddColumn>
        </Columns>
        <AddColumnModal
          board={board}
          isOpen={isModalOpen}
          setIsOpen={toggleModal}
        />
      </BoardContainer>
      {/* </WrapperBoardContainer> */}
    </StyleSheetManager>
  );
};

export default MainDashboard;
