/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon/Icon.jsx';

export const ModalContainer = styled.div`
  padding: 24px;
  position: relative;
  width: 300px;
`;

export const TitleBox = styled.div`
  border-bottom: 1px solid #ffffff4d;
  padding-bottom: 14px;
`;

export const Title = styled.h2`
  color: rgb(255, 255, 255);
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
  background: rgb(21, 21, 21);
`;

export const IconClose = styled(Icon)`
  position: absolute;

  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: #ffffff;
`;

export const TitleRadioButtons = styled.h3`
  color: rgb(255, 255, 255);
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
  color: rgba(255, 255, 255, 0.5);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -2%;
`;

export const RadioButtonGroup = styled.div`
  margin-top: 14px;
`;

export const RadioButton = styled.label`
  display: flex;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0px;
  }

  input[type='radio']:checked + & {
    color: rgb(255, 255, 255);
  }
`;
