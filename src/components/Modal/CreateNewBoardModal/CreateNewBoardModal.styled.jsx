/** @format */

import { Form, ErrorMessage, Field } from 'formik';
import Icon from '../../Icon/index';

import styled from 'styled-components';

export const Title = styled.p`
  color: ${props => props.theme.help.modalTextMain};
  background: ${props => props.theme.modal.backgroundMain};
  margin: 0;
  padding-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  cursor: default;
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

export const TitleIcons = styled.span`
  font-size: 14px;
  font-weight: 500px;
  color: ${props => props.theme.help.modalTextMain};
  padding-bottom: 14px;
  cursor: default;
`;

export const TitleBackground = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.help.modalTextMain};
  padding-bottom: 14px;
  cursor: default;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-bottom: 24px;
  .invisible {
    visibility: hidden;
    position: absolute;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding-bottom: 40px;
  .invisible {
    visibility: hidden;
    position: absolute;
  }
  flex-wrap: wrap;
`;

export const TypesOfIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: ${props =>
    props.isActive ? props.theme.modal.textMain : props.theme.modal.icon};
  &:hover,
  &:focus {
    stroke: ${props => props.theme.header.userName};
  }
`;

export const TypesOfBackground = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 5px;

  border: 3px solid transparent;
  transition: border-color 0.3s ease;
  border-color: ${props =>
    props.isBackgroundActive ? props.theme.header.userName : 'transparent'};
  &:hover,
  &:focus {
    border-color: ${props => props.theme.header.userName};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 335px;
  max-width: 100vw;

  @media (min-width: 768px) {
    width: 350px;
  }

  border-radius: 8px solid rgba(17, 17, 17, 0.1);
  background: ${props => props.theme.modal.backgroundMain};
  padding: 24px;
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

export const LabelRadio = styled.label`
  margin: 0;
  cursor: pointer;
  width: 28px;
  height: 28px;
  overflow: hidden;
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

  transition: all 250ms ease;
  color: ${props => props.theme.profile.textMain};

  &::placeholder {
    color: ${props => props.theme.modal.textSecondary};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
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

export const AddIcon = styled(Icon)`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.modal.plusColor};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 5px;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.sidebar.addButtonColor};
  margin-right: 8px;
`;

export const ButtonText = styled.span`
  color: ${props => props.theme.addcolum.buttonBackground};
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: relative;
  top: 0;
  left: 40%;
  opacity: 0.8;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  color: black;
  font-size: 10px;
  font-weight: normal;
  letter-spacing: 0.04em;
  line-height: 1.45;
`;

export const FieldContainer = styled.div`
  position: relative;
`;
