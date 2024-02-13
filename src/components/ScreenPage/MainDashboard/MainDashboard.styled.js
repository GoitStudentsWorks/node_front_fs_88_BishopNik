/** @format */

// MainDashboard.styled.js
import styled from 'styled-components';
import Icon from 'components/Icon';

export const WrapperBoardContainer = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-grow: 1;
  overflow-y: hidden;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-x: auto;
  display: flex;
  gap: 20px;
  padding-bottom: 36px;

  &::-webkit-scrollbar {
    height: 12px;
    background: rgba(18, 18, 18, 1);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.sidebar.addButtonBackground};
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 28px;
  }
`;

export const BtnAddColumn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 58px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  width: 334px;
  color: ${props => props.theme.help.modalTextMain};
  background-color: ${props => props.theme.profile.background};

  border: none;
  cursor: pointer;
  height: 58px;
`;

export const StyledIconAdd = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: ${props => props.theme.addcolum.plusBackground};
  border-radius: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.sidebar.addButtonHover};
  }
`;

export const SvagAddColumn = styled(Icon)`
  stroke: ${props => props.theme.addcolum.plusColor};
  width: 14px;
  height: 14px;
`;
