import styled from 'styled-components';
import Modal from 'react-modal';
// .modal-overlay {
//   position: fixed,
//   top: 0,
//   width: 100%,
//   height: 100%,
//   background-color: rgba(78, 74, 72, 0.6),
// }

export const ModalContentStyles = {
  position: 'relative',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  maxWidth: '335px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(21, 21, 21, 1)',
  borderRadius: '8px',
  border: 'none',
  padding: '24px',

  //  @media (min-width: 375px) {
  //     max-width: none,
  //     width: 335px,
  //   }
  //   @media (min-width: 376px) and (max-width: 767px) {
  //     width: 400px,
  //   }

  //   @media (min-width: 768px) {
  //     width: 400px,
  //   }
};

export const modalTextStyles = {
  color: '#FFFFFF',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '27px',
  letterSpacing: '-0.02em',
};

export const closeIconStyles = {
  position: 'absolute',
  right: '14px',
  top: '14px',
};
