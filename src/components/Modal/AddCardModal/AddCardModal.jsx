/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import {
  CloseButton,
  ModalContainer,
  TextArea,
  RadioButton,
  AddButton,
  FormTitle,
  SubTitles,
  RadioButtonContainer,
  IconClose,
  StyledInput,
} from './AddCardModal.styled';
import MyDatePicker from '../../DatePicker/MyDatePicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string(),
  color: Yup.string().required('Color is required'),
  deadline: Yup.date(),
});

export const AddCardModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const handleFormSubmit = values => {
    onSubmit(values);
  };

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <ModalContainer>
        <CloseButton onClick={onRequestClose}>
          <IconClose name="close" />
        </CloseButton>
        <FormTitle>Add Card</FormTitle>
        <Formik
          initialValues={{
            title: '',
            description: '',
            color: '',
            deadline: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <StyledInput type="text" name="title" placeholder="Title" />
              <ErrorMessage name="title" component="div" />

              <Field
                type="text"
                name="description"
                placeholder="Description"
                as={TextArea}
              />

              <div>
                <SubTitles>Label color:</SubTitles>
                <RadioButtonContainer>
                  <label>
                    <Field
                      type="radio"
                      name="color"
                      value="color1"
                      as={RadioButton}
                    />
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="color"
                      value="color2"
                      as={RadioButton}
                    />
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="color"
                      value="color3"
                      as={RadioButton}
                    />
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="color"
                      value="color4"
                      as={RadioButton}
                    />
                  </label>
                </RadioButtonContainer>
                <ErrorMessage name="color" component="div" />
              </div>

              <div>
                <SubTitles>Deadline:</SubTitles>
                <Field name="deadline" as={MyDatePicker} />
                <ErrorMessage name="deadline" component="div" />
              </div>

              <AddButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add'}
              </AddButton>
            </Form>
          )}
        </Formik>
      </ModalContainer>
    </ModalWindow>
  );
};
