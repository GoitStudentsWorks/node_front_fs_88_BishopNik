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
`;

// Стилизированная радиокнопка
export const RadioButton = styled.label`
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  color: ${props => props.theme.popup.textSecondary};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 10px;
  margin-bottom: 8px;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
  }

  input[type='radio']:checked + & {
    color: ${props => props.theme.help.modalTextMain};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.help.modalTextMain};
  }
`;

// Стилизированный кружок, заменяющий радиокнопку
export const RadioButtonStyled = styled.span`
  display: inline-block;
  width: 14px; /* Диаметр кружка */
  height: 14px; /* Диаметр кружка */
  border-radius: 50%;

  ${({ color }) => `background-color: ${color};`}

  /* Цвет кружка при наведении */
  ${RadioButton}:hover & {
  }

  /* Цвет кружка при выборе */
  ${RadioButton} input[type="radio"]:checked + & {
    border: 1px solid;
    ${({ color }) => `border-color: ${color};`}
    background-color: transparent;
  }
`;
