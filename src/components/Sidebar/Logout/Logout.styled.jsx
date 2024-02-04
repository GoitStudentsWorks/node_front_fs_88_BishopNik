import styled from 'styled-components';
import Icon from '../../Icon/index';

export const LogoutIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  stroke: rgba(190, 219, 176, 1);
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
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    ${LogoutIcon} {
      stroke: rgba(157, 200, 136, 1);
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
  font-weight: 500;
  margin-left: 14px;
  color: rgba(255, 255, 255, 1);
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
