/** @format */

import React from 'react';
import { TextEmptyBoard, ButtonCreateBoard } from './MainComponent.styled';
import { useDispatch } from 'react-redux';
import { modalsSlice } from 'redux/modals/modalSlice';


function MainComponent({ children }) {
  const dispatch = useDispatch();

  return (
    <>
      {children ? (
        <>{children}</>
      ) : (
        <TextEmptyBoard>
          Before starting your project, it is essential{' '}
          <ButtonCreateBoard
            onClick={() => {
              dispatch(
                modalsSlice.actions.openCreateEditBoardModal({ isOpen: true })
              );
            }}
          >
            to create a board
          </ButtonCreateBoard>{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </TextEmptyBoard>
      )}
    </>
  );
}

export default MainComponent;
