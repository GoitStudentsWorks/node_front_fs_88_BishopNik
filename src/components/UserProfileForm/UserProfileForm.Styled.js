/** @format */

import Icon from 'components/Icon/Icon.jsx';
import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const AvatarLabelStyle = styled.label`
  display: flex;
  justify-content: center;
  opacity: 0;
`;

export const ImgStyled = styled.img`
  /* display: flex; */
  width: 68px;
  height: 68px;
  border-radius: 8px;
`;

export const LogoStyles = styled.div`
  position: absolute;
  bottom: -12px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;

  &:hover,
  :focus {
    background-color: ${props => props.theme.sidebar.hoverLogout};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  outline: none;
  flex-direction: column;
  min-width: 335px;
  border-radius: 8px;
  background: ${props => props.theme.modal.backgroundMain};
  color: ${props => props.theme.help.modalTextMain};

  padding: 24px;

  @media (max-width: 375px) {
    max-width: none;
    width: 335px;
  }

  @media (min-width: 376px) and (max-width: 767px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.help.modalTextMain};
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  cursor: default;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledField = styled(Field)`
  color: ${props => props.theme.profile.textMain};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.profile.inputBorder};
  padding: 14px 0px 14px 18px;
  opacity: 0.4;
  outline: none;

  background: ${props => props.theme.modal.backgroundSecondary};
  width: 100%;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  opacity: 0.4;
  transition: all 250ms ease;

  &::placeholder {
    color: ${props => props.theme.help.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const IconHideShow = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: ${props => props.theme.modal.textSecondary};
`;

export const ButtonStyle = styled.button`
  display: flex;
  width: 100%;
  border: none;
  margin-top: 24px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme.modal.buttonBackground};
  color: ${props => props.theme.modal.buttonText};
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  &:hover,
  :focus {
    background-color: ${props => props.theme.sidebar.hoverLogout};
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  color: red;
`;

export const LabelStyle = styled.label`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 68px;
  height: 68px;
  background: silver;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 14px;
  border-radius: 8px;
  cursor: pointer;
`;

export const BlockLogoStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  /* margin-top: 24px;
  margin-bottom: -12px; */
`;

export const ButtonIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.modal.buttonText};
`;

export const BattonPasswordDisplayStyle = {
  position: 'absolute',
  top: '24px',
  right: '18px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
};
