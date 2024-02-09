/** @format */

import Icon from 'components/Icon/Icon.jsx';
import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  min-width: 335px;
  border-radius: 8px;
  background: #151515;

  padding: 24px;

  @media (min-width: 375px) {
    max-width: none;
    width: 335px;
  }

  @media (min-width: 376px) and (max-width: 767px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledField = styled(Field)`
  color: #fff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  padding: 14px 18px 14px 18px;
  opacity: 0.4;
  background: #1f1f1f;
  width: 100%;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;

export const IconHideShow = styled(Icon)`
  width: 18px;
  height: 18px;
`;

export const ButtonStyle = styled.button`
  display: flex;
  width: 100%;
  margin-top: 24px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #bedbb0;
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  &:hover,
  :focus {
    background-color: #9dc888;
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  color: red;
`;

export const LogoStyles = styled.div`
  position: absolute;
  bottom: -12px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bedbb0;

  &:hover,
  :focus {
    background-color: #9dc888;
  }
`;

export const BlockLogoStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 24px;
`;

export const logoStyles = {
  stroke: 'black',
};
