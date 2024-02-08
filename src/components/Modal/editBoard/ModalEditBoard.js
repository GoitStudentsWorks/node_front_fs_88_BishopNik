/** @format */

import Modal from 'react-modal';
import { Formik, Field } from 'formik';
import {
  StyledForm,
  HeaderContainer,
  CloseIcon,
  LabelBox,
  StyledField,
  Button,
  ButtonText,
  Title,
  TitleIcons,
  IconsContainer,
  TypesOfIcon,
  TitleBackground,
  BackgroundContainer,
  TypesOfBackground,
  LabelRadio,
  IconWrapper,
  AddIcon,

} from './ModalEditBoard.styled';

import background from '../../../img/background.json';

console.log(background);

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
  },
};

export const ModalEditBoard = ({ isOpen, setIsOpen }) => {
  const handleSubmit = () => {};

  const icons = [1, 2, 3, 4, 5, 6, 7, 8];
  const backgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <Formik
        initialValues={{ title: '', icon: '', background: '' }}
        onSubmit={(values, actions) => {
          console.log(values);

          handleSubmit(values, actions);
        }}
        // validationSchema={LoginSchema}
      >
        <StyledForm autoComplete="off">
          <HeaderContainer>
            <Title>Edit board</Title>
            <CloseIcon name="close" onClick={() => setIsOpen(false)} />
          </HeaderContainer>

          <LabelBox>
            <label>
              <StyledField name="title" type="text" placeholder="Title" />
              {/* <ErrMessageStyled name="email" component="span" /> */}
            </label>

            {/* <ErrMessageStyled name="password" component="span" /> */}
          </LabelBox>
          <TitleIcons>Icons</TitleIcons>

          <IconsContainer>
            {icons.map(iconIndex => (
              <LabelRadio>
                <Field
                  className="invisible"
                  type="radio"
                  name="icon"
                  value={iconIndex}
                />
                <TypesOfIcon name={`type-${iconIndex}`} />
              </LabelRadio>
            ))}
          </IconsContainer>

          <TitleBackground>Background</TitleBackground>
          <BackgroundContainer>
            {backgrounds.map(imageIndex => (
              <LabelRadio>
                <Field
                  className="invisible"
                  type="radio"
                  name="backround"
                  value={imageIndex}
                />
                <TypesOfBackground
                  src={background.mobile[`image${imageIndex}`]}
                ></TypesOfBackground>
              </LabelRadio>
            ))}
          </BackgroundContainer>

          <Button type="submit">
            <IconWrapper>
            <AddIcon name="add-board" />
            </IconWrapper>
          
            <ButtonText>Edit</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
