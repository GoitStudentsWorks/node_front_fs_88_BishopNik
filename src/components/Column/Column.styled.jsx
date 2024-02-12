/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon/Icon.jsx';

export const Wrapper = styled.li`
  width: 350px;
  max-width: 100vw;
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
  /* width: 334px;
  max-width: 100%; */
  padding: 14px 24px;
  background-color: ${props => props.theme.profile.background};
  color: ${props => props.theme.help.modalTextMain};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  cursor: default;
`;

export const List = styled.div`
  grid-area: title;
  width: 334px;
  max-width: 98vw;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
  overflow-y: auto;
`;

export const ListTasksContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 14px;

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
  /* width: 100%; */
  /* max-width: 98vw; */
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

export const EditColumn = styled(Icon)`
  stroke: ${props => props.theme.colum.icon};
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colum.buttonBackground};
  }
`;

export const DelColumn = styled(Icon)`
  stroke: ${props => props.theme.colum.icon};
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colum.buttonBackground};
  }
`;

export const battonStyle = {
  width: '334px',
  maxWidth: '98vw',
};
