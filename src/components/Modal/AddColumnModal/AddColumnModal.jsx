/** @format */

import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';

import {
  ModalTitle,
  StyledForm,
  StyledFormField,
  StyledErrorMessage,
  BtnAdd,
  HeaderContainer,
  CloseIcon,
  IconWrapper,
  AddIcon,
} from './AddColumnModal.styled';
import { useDispatch } from 'react-redux';
import { addColum } from 'redux/columns/operations';

const columnSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
});

export const AddColumnModal = ({ isOpen, setIsOpen, board }) => {
  const dispatch = useDispatch();

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      <Formik
        initialValues={{
          name: '',
          boarderId: `${board}`,
        }}
        validationSchema={columnSchema}
        onSubmit={(newColumn, actions) => {
          dispatch(addColum(newColumn));
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm autoComplete="off">
            <HeaderContainer>
              <ModalTitle>Add column</ModalTitle>
              <CloseIcon name="close" onClick={() => setIsOpen(false)} />
            </HeaderContainer>

            <StyledFormField type="text" name="name" placeholder="Title" />
            <StyledErrorMessage name="name" component="div" />
            <BtnAdd type="submit" disabled={isSubmitting}>
              <IconWrapper>
                <AddIcon name="add-board" />
              </IconWrapper>
              Add
            </BtnAdd>
          </StyledForm>
        )}
      </Formik>
    </ModalWindow>
  );
};
