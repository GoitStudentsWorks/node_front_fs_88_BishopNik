/** @format */

import { Formik, Field } from 'formik';
import { createBoardSchema } from '../../Helpers/ModalSchemas';
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
  ErrMessageStyled,
} from './CreateNewBoardModal.styled';
import { customStyles } from '../Modal.styled';
import { addBoard } from 'redux/boards/operations';
import background from '../../../img/background.json';
import ModalWindow from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSlice } from 'redux/boards/boardsSlice';
import { modalData, boardsState } from 'redux/boards/selectors';

const icons = [1, 2, 3, 4, 5, 6, 7, 8];
const backgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const CreateNewBoardModal = () => {
  const dispatch = useDispatch();
  const { isOpen, boardId } = useSelector(modalData);
  const boards = useSelector(boardsState);

  const boardForEditing = boardId && boards.find(item => item.id === boardId);

  const closeModal = () => {
    dispatch(boardsSlice.actions.openCreateEditBoardModal({ isOpen: false }));
  };

  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Formik
        initialValues={{
          title: boardForEditing?.name || '',
          icon: boardForEditing?.icon || '',
          background: boardForEditing?.background || '',
          id: boardId,
        }}
        onSubmit={(values, actions) => {
          console.log(values);

          const data = {
            name: values.title,
            icon: values.icon,
          };
          if (boardId) {
            dispatch(addBoard(data));
          } else {
            dispatch(addBoard(data));
          }
        }}
        validationSchema={createBoardSchema}
      >
        <StyledForm autoComplete="off">
          <HeaderContainer>
            <Title>New board</Title>
            <CloseIcon name="close" onClick={closeModal} />
          </HeaderContainer>

          <LabelBox>
            <label>
              <StyledField name="title" type="text" placeholder="Title" />
              <ErrMessageStyled name="title" component="span" />
            </label>
          </LabelBox>
          <TitleIcons>Icons</TitleIcons>

          <IconsContainer>
            {icons.map(iconIndex => (
              <LabelRadio key={`icons-${iconIndex}`}>
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
              <LabelRadio key={`backround-${imageIndex}`}>
                <Field
                  className="invisible"
                  type="radio"
                  name="background"
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
            <ButtonText>Create</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
    </ModalWindow>
  );
};
