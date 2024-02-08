/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import {
  CloseButton,
  ModalContainer,
  Input,
  TextArea,
  RadioButton,
  AddButton,
  FormTitle,
  SubTitles,
  RadioButtonContainer,
  IconClose,
} from './AddCardModal.styled';
import MyDatePicker from '../../DatePicker/MyDatePicker';


export const AddCardModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = data => {
    onSubmit(data);
  };

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <ModalContainer>
        <CloseButton onClick={onRequestClose}>
        <IconClose name='close'/>
        </CloseButton>
        <FormTitle>Add Card</FormTitle>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            {...register('title', { required: true })}
            placeholder="Title"
          />
          {errors.title && <span>This field is required</span>}

          <TextArea {...register('description')} placeholder="Describtion" />

          <div>
            <SubTitles>Label color:</SubTitles>
            <RadioButtonContainer>
            <RadioButton type="radio" {...register('color')} value="color1" />
            <RadioButton type="radio" {...register('color')} value="color2" />
            <RadioButton type="radio" {...register('color')} value="color3" />
            <RadioButton type="radio" {...register('color')} value="color4" />
            </RadioButtonContainer>
            
          </div>

          <div>
            <SubTitles>Deadline:</SubTitles>
            <MyDatePicker {...register('deadline')} />
          </div>
          
          <AddButton type="submit">Add</AddButton>
        </form>
      </ModalContainer>
    </ModalWindow>
  );
};
