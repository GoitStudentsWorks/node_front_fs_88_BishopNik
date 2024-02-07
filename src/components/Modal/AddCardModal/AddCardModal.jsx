import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { CloseButton, ModalContainer, Label, Input, TextArea, RadioButton, AddButton } from './AddCardModal.styled';
import MyDatePicker from '../../DatePicker/MyDatePicker';

Modal.setAppElement('#root');

const AddCardModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const handleFormSubmit = (data) => {
      onSubmit(data);
    };
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Add Card Modal"
        className="add-card-modal"
      >
        <ModalContainer>
            <CloseButton onClick={onRequestClose}>
                <svg className="CloseButton" onClick={onRequestClose}>
                    <use href="#icon-close" />
                </svg>
          </CloseButton>
          <h2>Add Card</h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Label>Title:</Label>
            <Input {...register('title', { required: true })} />
            {errors.title && <span>This field is required</span>}
  
            <Label>Description:</Label>
            <TextArea {...register('description')} />
  
            <Label>Label color:</Label>
            <RadioButton type="radio" {...register('color')} value="color1" />
            <RadioButton type="radio" {...register('color')} value="color2" />
            <RadioButton type="radio" {...register('color')} value="color3" />
            <RadioButton type="radio" {...register('color')} value="color4" />
                        
            <Label>Deadline:</Label>
            <MyDatePicker {...register('deadline')} />
            <AddButton type="submit">Add</AddButton>
          </form>
        </ModalContainer>
      </Modal>
    );
  };
  
  export default AddCardModal;