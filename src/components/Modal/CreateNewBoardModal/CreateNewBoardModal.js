/** @format */

import React, { useContext } from 'react';
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
	ErrMessageStyled,
} from './CreateNewBoardModal.styled';
import { customStyles } from '../Modal.styled';
import background from '../../../img/background.json';
import ModalWindow from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
// import { boardsSlice } from 'redux/boards/boardsSlice';
import { modalData } from 'redux/boards/selectors';
import { addBoard } from 'redux/boards/operations';
import { MainContext } from 'components/Helpers';

export const CreateNewBoardModal = () => {
	const dispatch = useDispatch();
	const { isOpen, boardId } = useSelector(modalData);
	// const boards = useSelector(boardsState);
	const { isOpenAddBoard, setIsOpenAddBoard } = useContext(MainContext);

	// const boardForEditing = boardId && boards.find(item => item.id === boardId);

	const closeModal = () => {
		setIsOpenAddBoard(false);
		// dispatch(boardsSlice.actions.openCreateEditBoardModal({ isOpen: false }));
	};

	return (
		<ModalWindow isOpen={isOpenAddBoard} onRequestClose={closeModal} style={customStyles}>
			<Formik
				initialValues={{
					name: '',
					icon: '0',
					background: '0',
				}}
				onSubmit={(board, actions) => {
					dispatch(addBoard(board));
					console.log(isOpen, boardId);
					if (!isOpen) closeModal();
				}}
				// validationSchema={createBoardSchema}
			>
				<StyledForm autoComplete='off'>
					<HeaderContainer>
						<Title>New board</Title>
						<CloseIcon name='close' onClick={closeModal} />
					</HeaderContainer>

					<LabelBox>
						<label>
							<StyledField name='name' type='text' placeholder='Title' />
							<ErrMessageStyled name='name' component='span' />
						</label>
					</LabelBox>
					<TitleIcons>Icons</TitleIcons>

					<IconsContainer>
						{Array.from({ length: 8 }, (_, iconIndex) => (
							<LabelRadio key={`icons-${iconIndex}`}>
								<Field
									className='invisible'
									type='radio'
									name='icon'
									value={iconIndex}
								/>
								<TypesOfIcon name={`type-${iconIndex}`} />
							</LabelRadio>
						))}
					</IconsContainer>

					<TitleBackground>Background</TitleBackground>
					<BackgroundContainer>
						{Array.from({ length: 15 }, (_, imageIndex) => (
							<LabelRadio key={`background-${imageIndex}`}>
								<Field
									className='invisible'
									type='radio'
									name='background'
									value={imageIndex}
								/>
								<TypesOfBackground
									src={background.mobile[`image${imageIndex}`]}
								></TypesOfBackground>
							</LabelRadio>
						))}
					</BackgroundContainer>

					<Button type='submit'>
						<IconWrapper>
							<AddIcon name='add-board' />
						</IconWrapper>
						<ButtonText>Create</ButtonText>
					</Button>
				</StyledForm>
			</Formik>
		</ModalWindow>
	);
};
