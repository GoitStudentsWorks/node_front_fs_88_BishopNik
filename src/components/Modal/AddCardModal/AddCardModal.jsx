/** @format */

import React, { useEffect } from 'react';
// import { StyleSheetManager } from 'styled-components';
import { Formik, Form, Field } from 'formik';
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
  Input,
  Label,
  IconDown,
  DataContainer,
  ErrorMsg,
  FieldContainer,
} from './AddCardModal.styled';
import MyDatePicker from 'components/DatePicker';
import { addCardValidationSchema } from 'components/Helpers';
import { useDispatch } from 'react-redux';
import { addCard, updateCard } from 'redux/cards/operations';
import { useCards } from 'hooks';

export const AddCardModal = ({
  isOpen,
  onRequestClose,
  columnId,
  cardForEditing,
}) => {
  const dispatch = useDispatch();
  const { statusCreateCard } = useCards();

  const isEdit = !!cardForEditing;

  const handleFormSubmit = values => {
    if (cardForEditing) {
      dispatch(
        updateCard({
          ...values,
          columnId,
          id: cardForEditing?._id,
          oldColumnId: cardForEditing?.columnId,
        })
      );
    } else {
      dispatch(addCard({ ...values, columnId }));
    }
  };

  useEffect(() => {
    if (statusCreateCard === false && isOpen) {
      onRequestClose();
    }
  }, [dispatch, isOpen, onRequestClose, statusCreateCard]);

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {/* <StyleSheetManager shouldForwardProp={prop => prop !== 'isOpen'}> */}
      <ModalContainer>
        <CloseButton onClick={onRequestClose}>
          <IconClose name="close" />
        </CloseButton>
        <FormTitle>{isEdit ? 'Edit' : 'Add'} Card</FormTitle>
        <Formik
          initialValues={{
            name: cardForEditing?.name || '',
            text: cardForEditing?.text || '',
            priority: cardForEditing?.priority || 'without',
            deadline: cardForEditing?.deadline || 0,
          }}
          validationSchema={addCardValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <FieldContainer>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Title"
                  autoFocus
                />
                <ErrorMsg name="name" component="div" />
              </FieldContainer>
              <Field
                type="text"
                name="text"
                placeholder="Description"
                as={TextArea}
              />
              <FieldContainer>
                <SubTitles>Label color:</SubTitles>
                <RadioButtonContainer>
                  <Field name="priority">
                    {({ field }) => (
                      <>
                        <RadioButton>
                          <Input
                            type="radio"
                            {...field}
                            value="without"
                            id="without"
                          />
                          <Label
                            htmlFor="without"
                            color="rgb(125 115 115)"
                          ></Label>
                        </RadioButton>
                        <RadioButton>
                          <Input type="radio" {...field} value="low" id="low" />
                          <Label
                            htmlFor="low"
                            color="rgba(143, 161, 208, 1)"
                          ></Label>
                        </RadioButton>
                        <RadioButton>
                          <Input
                            type="radio"
                            {...field}
                            value="medium"
                            id="medium"
                          />
                          <Label
                            htmlFor="medium"
                            color="rgba(224, 156, 181, 1)"
                          ></Label>
                        </RadioButton>
                        <RadioButton>
                          <Input
                            type="radio"
                            {...field}
                            value="high"
                            id="high"
                          />
                          <Label
                            htmlFor="high"
                            color="rgba(190, 219, 176, 1)"
                          ></Label>
                        </RadioButton>{' '}
                      </>
                    )}
                  </Field>
                </RadioButtonContainer>

                <ErrorMsg name="priority" component="div" />
              </FieldContainer>
              <FieldContainer>
                <SubTitles>Deadline:</SubTitles>
                <DataContainer>
                  <MyDatePicker
                    value={values.deadline}
                    onChange={value => setFieldValue('deadline', value)}
                  />
                  <IconDown name="chevron-down" />
                </DataContainer>

                <ErrorMsg name="deadline" component="div" />
              </FieldContainer>
              <AddButton type="submit">{isEdit ? 'Edit' : 'Add'}</AddButton>
            </Form>
          )}
        </Formik>
      </ModalContainer>
      {/* </StyleSheetManager> */}
    </ModalWindow>
  );
};
