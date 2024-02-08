/** @format */

import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { modalsSlice } from 'redux/modals/modalSlice';
import { needHelpModalState } from 'redux/modals/selectors';
import { sendHelpReq } from 'redux/modals/operations';
import { needHelpSchema } from '../../Helpers/ModalSchemas';
import {
  StyledForm,
  HeaderContainer,
  CloseIcon,
  StyledTextArea,
  LabelBox,
  StyledField,
  Button,
  ButtonText,
	Title,
	ErrMessageStyled
} from './NeedHelpModal.styled';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';

export const NeedHelpModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(needHelpModalState);

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={() =>
        dispatch(modalsSlice.actions.openNeedHeplModal(false))
      }
      style={customStyles}
    >
      <Formik
        initialValues={{ email: '', comment: '' }}
        onSubmit={(values, actions) => {
          dispatch(sendHelpReq(values));
        }}
        validationSchema={needHelpSchema}
      >
        <StyledForm autoComplete="off">
          <HeaderContainer>
            <Title>Need help</Title>
            <CloseIcon
              name="close"
              onClick={() =>
                dispatch(modalsSlice.actions.openNeedHeplModal(false))
              }
            />
          </HeaderContainer>
          <LabelBox>
            <label>
              <StyledField
                name="email"
                type="email"
                placeholder="Email address"
              />
              <ErrMessageStyled name="email" component="span" />
            </label>
            <label>
              <StyledTextArea
                name="comment"
                type="text"
                placeholder="Comment"
              />
              <ErrMessageStyled name="comment" component="span" />
            </label>
          </LabelBox>

          <Button type="submit">
            <ButtonText>Send</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
    </ModalWindow>
  );
};
