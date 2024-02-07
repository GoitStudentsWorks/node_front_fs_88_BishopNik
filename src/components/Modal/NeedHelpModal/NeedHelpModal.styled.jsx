/** @format */

import { Form, ErrorMessage, Field } from 'formik';
import Icon from '../../Icon/index';


import styled from 'styled-components';


export const Title = styled.p`
  color: #fff;
  background: #151515;
  margin: 0;
  padding-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    width: 335px;
  }
  width: 400px;
  height: 355px;
  border-radius: 8px;
  background: #151515;
  padding: 24px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

// export const NavBox = styled.div`
// 	display: flex;
// 	gap: 14px;
// 	margin-bottom: 40px;
// `;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const ErrMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const StyledField = styled(Field)`
  color: #fff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  padding: 14px 0px 14px 18px;
  opacity: 0.4;
  background: #1f1f1f;
  width: 100%;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;
export const StyledTextArea = styled(Field)`
  color: #fff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  padding: 14px 0px 14px 18px;
  opacity: 0.4;
  background: #1f1f1f;
  width: 100%;
  height: 120px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
  &::-webkit-input-placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #bedbb0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background: rgba(157, 200, 136, 1);
  }
`;

export const ButtonText = styled.span`
    color: ${props => props.theme.help.modalButtonColor};
	text-align: center;
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.28px;
`;
