import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';

import {
  ModalTitle,
  StyledForm,
  StyledFormField,
  StyledErrorMessage,
  BtnAdd,
  ErrorMessageText,
} from './AddColumnModal.styled';
import { toast, Toaster } from 'react-hot-toast';

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
    minWidth: '350px',
    maxWidth: '400px',
  },
};

const initialValues = {
  title: '',
};
const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const AddColumnModal = ({ isOpen, onClose }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = ({ title }, { setSubmitting }) => {
    setSubmitting(true);

    if (!title.trim()) {
      setErrorMessage('Title is required');
      setSubmitting(false);
      return;
    }
    toast.success('Column created');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={columnSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <ModalTitle>Add column</ModalTitle>
              <StyledFormField
                autoFocus
                type="text"
                name="title"
                placeholder="Title"
              />
              <StyledErrorMessage name="title" component="div" />
              <BtnAdd type="submit" disabled={isSubmitting}>
                Add
              </BtnAdd>
              {errorMessage && (
                <ErrorMessageText>{errorMessage}</ErrorMessageText>
              )}
            </StyledForm>
          )}
        </Formik>
      </>
    </Modal>
  );
};
