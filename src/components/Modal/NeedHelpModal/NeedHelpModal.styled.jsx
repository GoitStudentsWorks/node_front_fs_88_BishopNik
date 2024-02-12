/** @format */

import { Form, ErrorMessage, Field } from 'formik';
import Icon from '../../Icon';

import styled from 'styled-components';

export const Title = styled.p`
  color: ${props => props.theme.help.modalTextMain};
  margin: 0;
  padding-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  cursor: default;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    width: 335px;
  }
  width: 400px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: ${props => props.theme.profile.background};
  padding: 24px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: ${props => props.theme.modal.iconClose};
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: ${props => props.theme.sidebar.hoverLogout};
  }
  &:focus {
    stroke: ${props => props.theme.sidebar.hoverLogout};
  }
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
  color: ${props => props.theme.profile.textMain};
  border-radius: 8px solid rgba(17, 17, 17, 0.1);
  outline: none;
  border: 1px solid ${props => props.theme.profile.inputBorder};
  padding: 14px 0px 14px 18px;
  opacity: 0.4;
  background: ${props => props.theme.profile.background};
  width: 100%;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  &:hover {
    opacity: 1;
  }

  color: ${props => props.theme.modal.textMain};

  &:focus {
    border-color: ${props => props.theme.modal.textAccent};
  }

  ::placeholder {
    color: ${props => props.theme.modal.textSecondary};
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 14px 5px 5px 18px;
  opacity: 0.4;
  border-radius: 8px;
  border: none;
  outline: none;
  height: 120px;
  position: relative;
  width: 100%;
  resize: none;
  border: 1px solid ${props => props.theme.profile.inputBorder};
  color: ${props => props.theme.profile.textMain};
  background: ${props => props.theme.profile.background};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  &:hover {
    opacity: 1;
    border-color: ${props => props.theme.modal.textAccent};
  }

  color: ${props => props.theme.modal.textMain};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${props => props.theme.modal.textAccent};
  }

  ::placeholder {
    color: ${props => props.theme.modal.textSecondary};
    border-color: ${props => props.theme.modal.textAccent};
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  outline: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.help.buttonBackground};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${props => props.theme.sidebar.hoverLogout};
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
