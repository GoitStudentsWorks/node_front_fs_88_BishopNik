/** @format */

import styled from 'styled-components';
import Icon from '../../Icon/index';

export const IconContainer = styled.div`
  width: 40px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(190, 219, 176, 1);
  border-radius: 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BtnAdd = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  border: none;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    ${IconContainer} {
      background-color: rgba(157, 200, 136, 1);
    }
  }

  @media screen and (min-width: 375px) {
    width: 197px;
    height: 70px;
  }

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`;

export const Text = styled.p`
  width: 76px;
  height: 42px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
`;

export const BtnIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  stroke: black;
`;
