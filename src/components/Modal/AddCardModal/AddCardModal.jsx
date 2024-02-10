/** @format */

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
import { addCardValidationSchema } from 'components/Helpers';
import { useDispatch } from 'react-redux';
import { resetError } from 'redux/cards/cardsSlice';
import { addCard, updateCard } from 'redux/cards/operations';
import { useCards } from 'hooks';
import Tooltip from '../../Tooltip/Tooltip';

export const AddCardModal = ({
  isOpen,
  onRequestClose,
  columnId,
  cardForEditing,
}) => {
  const dispatch = useDispatch();
  const { statusCreateCard } = useCards();

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const isEdit = !!cardForEditing;

  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };

  const handleOptionClick = option => {
    closeTooltip();
  };

  const handleFormSubmit = values => {
    // API ne dae vidprvutu description i color

    const { title, description, color, ...rest } = values;

    if (cardForEditing) {
      dispatch(
        updateCard({ ...rest, name: title, columnId, id: cardForEditing?._id })
      );
    } else {
      dispatch(addCard({ ...rest, name: title, columnId }));
    }
  };

  useEffect(() => {
    if (statusCreateCard === false && isOpen) {
      dispatch(resetError());
      onRequestClose();
    }
  }, [dispatch, isOpen, onRequestClose, statusCreateCard]);

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
        <FormTitle> {isEdit ? 'Edit' : 'Add'} Card</FormTitle>
        <Formik
          initialValues={{
            title: cardForEditing?.name || '',
            description: '',
            color: '',
            deadline: cardForEditing?.deadline || '',
          }}
          validationSchema={addCardValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ setFieldValue, values }) => (
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

                <MyDatePicker
                  value={values.deadline}
                  onChange={value => setFieldValue('deadline', value)}
                />

                <ErrorMessage name="deadline" component="div" />
              </div>

              <AddButton type="submit">{isEdit ? 'Edit' : 'Add'}</AddButton>
              <Tooltip
                isOpen={isTooltipOpen}
                onRequestClose={closeTooltip}
                handleOptionClick={handleOptionClick}
              />
            </Form>
          )}
        </Formik>
      </ModalContainer>
    </ModalWindow>
  );
};
