import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';

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
import toast from 'react-hot-toast';

Modal.setAppElement('#modal-root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(78, 74, 72, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: 5,
    border: '1px solid #151515',
    backgroundColor: '#151515',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
};

const initialValues = {
  title: '',
};

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const AddColumnModal = ({ isOpen, setIsOpen }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = ({ title }, { setSubmitting }) => {
    setSubmitting(true);

    if (!title.trim()) {
      setErrorMessage('Title is required');
      setSubmitting(false);
      return;
    }
    toast.success('Column created');
    setIsOpen(false); // Corrected onClose to setIsOpen
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={columnSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm autoComplete="off">
            <HeaderContainer>
              <ModalTitle>Add column</ModalTitle>
              <CloseIcon name="close" onClick={() => setIsOpen(false)} />
            </HeaderContainer>

            <StyledFormField
              autoFocus
              type="text"
              name="title"
              placeholder="Title"
            />
            <StyledErrorMessage name="title" component="div" />
            <BtnAdd type="submit" disabled={isSubmitting}>
              <IconWrapper>
                <AddIcon name="add-board" />
              </IconWrapper>
              Add
            </BtnAdd>
            {errorMessage && (
              <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            )}
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};
