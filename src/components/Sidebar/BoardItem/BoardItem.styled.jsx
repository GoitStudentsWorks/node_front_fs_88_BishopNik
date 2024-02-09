/** @format */

import styled from 'styled-components';
import Icon from '../../Icon';

export const BoardContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding-left: 14px;
  background-color: ${({ active, theme }) =>
    active ? theme.sidebar.projectActive : 'transparent'};

  @media screen and (min-width: 375px) {
    width: 225px;
    height: 61px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 61px;
    padding-left: 24px;
  }
`;

export const BoardNameContainer = styled.div`
  width: 145px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    width: 164px;
    gap: 8px;
  }
`;

export const BoardIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)'};
`;

export const BoardText = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;

  color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)'};
  margin: 0px;
`;

export const IconsContainer = styled.div`
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: 40px;
  height: 16px;
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

export const EditIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.sidebar.projectIcon};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.sidebar.textAccent};
  }
`;

export const DelIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.sidebar.projectIcon};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.sidebar.textAccent};
  }
`;

export const BoardLine = styled.p`
  width: 4px;
  height: 61px;
  margin: 0;
  margin-left: 14px;

  background-color: ${({ active }) =>
    active ? 'rgba(190, 219, 176, 1)' : 'transparent'};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;
