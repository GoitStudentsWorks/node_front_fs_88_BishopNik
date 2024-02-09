// /** @format */
// import React from 'react';
// import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';
// import Modal from 'react-modal';

// import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';
// import { UserIcon } from 'components/UserProfileForm/UserIcon';

// import './ModalEditProfile.css';

// Modal.setAppElement('#modal-root');

// const closeIconStyles = {
//   position: 'absolute',
//   right: '14px',
//   top: '14px',
// };

// const modalTextStyles = {
//   color: '#FFFFFF',
//   fontFamily: 'Poppins',
//   fontSize: '18px',
//   fontWeight: '500',
//   lineHeight: '27px',
//   letterSpacing: '-0.02em',
// };

// // const customStyles = {
// //   overlay: {
// //     backgroundColor: 'rgba(78, 74, 72, 0.6)',
// //   },
// //   content: {
// //     position: 'relative',
// //     top: '50%',
// //     left: '50%',
// //     right: 'auto',
// //     bottom: 'auto',
// //     // marginRight: '-50%',
// //     width: '400px',
// //     transform: 'translate(-50%, -50%)',
// //     backgroundColor: 'rgba(21, 21, 21, 1)',
// //     borderRadius: '8px',
// //     border: 'none',
// //     padding: '24px',
// //   },
// // };

// export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
//   return (
//     <Modal
//       isOpen={isModalState}
//       onRequestClose={stateСhangeModal}
//       overlayClassName={'modal-overlay'}
//       className={'modal-content'}
//       // style={customStyles}
//       contentLabel="onRequestClose"
//     >
//       <FiltersIcon
//         name="close"
//         onClick={stateСhangeModal}
//         style={closeIconStyles}
//       />
//       <p style={modalTextStyles}>Edit profile</p>
//       <UserIcon />

//       <UserProfileForm />
//     </Modal>
//   );
// };
