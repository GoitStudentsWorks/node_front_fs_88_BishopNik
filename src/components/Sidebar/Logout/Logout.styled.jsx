/** @format */

import styled from 'styled-components';
import Icon from '../../Icon';

export const LogoutIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  stroke: ${props => props.theme.sidebar.iconLogout};
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-left: 24px;
  margin-bottom: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    ${LogoutIcon} {
      stroke: ${props => props.theme.sidebar.hoverLogout};
    }
  }

  @media screen and (min-width: 375px) {
    width: 105px;
    height: 32px;
  }
`;

export const LogoutBtnText = styled.p`
  font-size: 14px;
  font-style: medium;
  margin-left: 14px;
  color: ${props => props.theme.sidebar.iconClose};
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
