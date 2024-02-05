import React, { useState, useEffect } from 'react';
import { ModalField, ModalWindow } from './BasicModal.styled';

const BasicModal = ({ children, name, open, closeModal }) => {
  const [modalClass, setModalClass] = useState('');

  const handleBtnClick = name => {
    if (name === 'NeedHelp') {
      setModalClass('needHelp');
    } else if (name === 'Filters') {
      setModalClass('filter');
    } else if (name === 'EditProfile') {
      setModalClass('editProfile');
    } else {
      setModalClass('');
    }
  };

  useEffect(() => {
    handleBtnClick(name);
  }, [name]);

  const handleModalClick = e => {
    e.stopPropagation();
  };

  return (
    <div style={{ position: 'absolute' }} onMouseDown={handleModalClick}>
      <ModalWindow
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalField className={modalClass}>{children}</ModalField>
      </ModalWindow>
    </div>
  );
};

export default BasicModal;
