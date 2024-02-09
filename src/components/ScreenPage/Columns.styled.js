import styled from '@emotion/styled';

export const ListColumn = styled.li`
  width: 350px;
  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const List = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
  padding-right: 8px;
  height: calc(100vh - 318px);
  overflow-y: auto;
`;
export const ListItem = styled.li`
  border-radius: 8px;
  width: 334px;
  padding: 14px 24px;
  background-color: #121212;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  height: 58px;
  align-items: center;
`;

export const IconsContainer = styled.div`
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
export const Btn = styled.button`
  width: 334px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
  background-color: #bedbb0;
  border-radius: 8px;
  border: none;
  color: #161616;
  height: 58px;
`;
