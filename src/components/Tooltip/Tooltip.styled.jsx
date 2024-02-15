/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const TooltipContent = styled.div`
  outline: none;
  background: ${props => props.theme.popup.background};
  min-width: 135px;
  height: auto;
  margin: 0 auto;
  padding: 15px;
  z-index: 1000;
`;

export const TooltipButton = styled.button`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  color: ${props => props.theme.popup.textSecondary};
  stroke: ${props => props.theme.popup.textSecondary};
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.popup.textAccent};
    stroke: ${props => props.theme.popup.textAccent};
  }
`;

export const IconProcess = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: inherit;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: inherit;
  }
`;
