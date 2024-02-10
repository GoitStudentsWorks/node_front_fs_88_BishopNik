/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon/Icon.jsx';

export const ModalContainer = styled.div`
  padding: 24px;
  position: relative;
  width: 300px;
  background: ${props => props.theme.modal.backgroundMain};
`;

export const TitleBox = styled.div`
  border-bottom: 1px solid ${props => props.theme.modal.line};
  padding-bottom: 14px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.help.modalTextMain};
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -2%;
  margin: 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: ${props => props.theme.modal.backgroundSecondary};
  border: none;
`;

export const IconClose = styled(Icon)`
  position: absolute;

  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: ${props => props.theme.modal.iconClose};
`;

export const TitleRadioButtons = styled.h3`
  color: ${props => props.theme.help.modalTextMain};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -2%;
`;

export const LinkShowAll = styled.a`
  position: absolute;
  top: 79px;
  right: 24px;
  color: ${props => props.theme.popup.textSecondary};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -2%;
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioButton = styled.label`
  position: relative;
  padding-left: 25px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => props.theme.popup.textSecondary};
  cursor: pointer;

  input[type='radio'] {
    position: absolute;
    -webkit-appearance: none;
    appearance: none;
    opacity: 0;
  }

  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border: 1px solid;
    ${({ color }) => `border-color: ${color};`}
    ${({ color }) => `background-color: ${color};`}
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: background-color 0.2s ease;
  }

  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    ${({ color }) => `background-color: ${color};`}

    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  input[type='radio']:checked + & {
    color: ${props => props.theme.help.modalTextMain};
  }

  input[type='radio']&:checked + &::before {
    background-color: transparent;
  }

  input[type='radio']&:checked + &::after {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.help.modalTextMain};
  }
`;
