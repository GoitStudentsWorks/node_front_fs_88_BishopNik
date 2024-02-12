/** @format */

import React from 'react';
import { Formik } from 'formik';
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
import { addColumn } from 'redux/columns/operations';
import { columnSchema } from 'components/Helpers/index.js';

// const columnSchema = Yup.object().shape({
// 	name: Yup.string().required('name is required'),
// });

export const AddColumnModal = ({ isOpen, setIsOpen, board }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Formik
        initialValues={{
          name: '',
          boarderId: `${board}`,
        }}
        validationSchema={columnSchema}
        onSubmit={(newColumn, actions) => {
          dispatch(addColumn(newColumn));
          handleCloseModal();
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm autoComplete="off">
            <HeaderContainer>
              <ModalTitle>Add column</ModalTitle>
              <CloseIcon name="close" onClick={handleCloseModal} />
            </HeaderContainer>

            <StyledFormField type="text" name="name" placeholder="Title" />
            <StyledErrorMessage name="name" component="div" />
            <BtnAdd type="submit" disabled={isSubmitting}>
              <IconWrapper>
                <AddIcon name="plus" />
              </IconWrapper>
              Add
            </BtnAdd>
          </StyledForm>
        )}
      </Formik>
    </ModalWindow>
  );
};
