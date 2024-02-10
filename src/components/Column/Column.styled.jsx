/** @format */

import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 351px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'task'
    'add';
  grid-template-rows: 56px auto 56px;
`;

export const Title = styled.span`
  color: ${props => props.theme.colum.textMain};
  font-size: 18px;
  border-radius: 8px;
  width: 334px;
  padding: 14px 24px;
  background-color: #121212;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.div`
  grid-area: title;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
  overflow-y: auto;
`;

export const ListTasksContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    height: 142px;
    background-color: rgba(18, 18, 18, 1);
    border-radius: 4px;
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.sidebar.addButtonBackground};
  }
`;

export const ListTasks = styled.div`
  grid-area: task;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
`;

export const IconsContainer = styled.div`
  grid-area: add;
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export const EditColumn = styled.svg`
  stroke: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

export const DelColumn = styled.svg`
  stroke: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;
