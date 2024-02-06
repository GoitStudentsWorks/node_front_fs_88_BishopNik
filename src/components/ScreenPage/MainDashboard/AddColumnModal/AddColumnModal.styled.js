import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const ModalTitle = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 24px;
`;
export const StyledForm = styled.form``;

export const StyledFormField = styled.input`
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid rgb(190, 219, 176, 0.5);
  color: #ffffff;
  margin-bottom: 24px;
  transition-property: border;
  transition: border 0.25s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    border: 1px solid #bedbb0;
  }
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 14px;
`;
export const BtnAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`;
export const ErrorMessageText = styled.div`
  color: #ffffff;
  margin-top: 10px;
`;
