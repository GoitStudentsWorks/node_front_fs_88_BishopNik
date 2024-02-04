/** @format */

import Modal from 'react-modal';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledTextArea,
  LabelBox,
  StyledField,
  Button,
  ButtonText,
  Title,
} from './ModalNeedHelpStyled';

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
	backgroundColor: '#151515'
  },
};

export const ModalNeedHelp = ({ isOpen, setIsOpen }) => {
  const handleSubmit = () => {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <Formik
        initialValues={{ email: '', comment: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        // validationSchema={LoginSchema}
      >
        <StyledForm autoComplete="off">
          <Title>Need help</Title>
          <LabelBox>
            <label>
              <StyledField
                name="email"
                type="email"
                placeholder="Email address"
              />
              {/* <ErrMessageStyled name="email" component="span" /> */}
            </label>
            <label>
              <StyledTextArea
                name="comment"
                type="text"
                placeholder="Comment"
              />
              {/* <ErrMessageStyled name="password" component="span" /> */}
            </label>
          </LabelBox>

          <Button type="submit">
            <ButtonText>Send</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
