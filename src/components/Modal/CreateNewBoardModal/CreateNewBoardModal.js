/** @format */

import React, { useContext, useEffect, useCallback } from 'react';
import { Formik, Field } from 'formik';
import { StyleSheetManager } from 'styled-components';
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
import { useDispatch } from 'react-redux';
import { resetError } from 'redux/boards/boardsSlice';
// import { boardsSlice } from 'redux/boards/boardsSlice';

import { addBoard, editBoard } from 'redux/boards/operations';
import { MainContext } from 'components/Helpers';
import { useNavigate } from 'react-router-dom';
import { useBoards } from 'hooks';

export const CreateNewBoardModal = () => {
	const dispatch = useDispatch();
	// const boards = useSelector(boardsState);
	const { isOpenAddBoard, setIsOpenAddBoard, boardEdit, setBoardEdit } = useContext(MainContext);
	const navigate = useNavigate();
	const { isOpen, boardId, allBoards } = useBoards();

	// const boardForEditing = boardId && boards.find(item => item.id === boardId);

	const closeModal = () => {
		resetStatus();
		// dispatch(boardsSlice.actions.openCreateEditBoardModal({ isOpen: false }));
	};

	const resetStatus = useCallback(() => {
		setIsOpenAddBoard(false);
		setBoardEdit(null);
	}, [setIsOpenAddBoard, setBoardEdit]);

	useEffect(() => {
		if (!isOpen) {
			if (boardId) navigate(`/todos/${boardId}`);
			resetStatus();
			dispatch(resetError());
		}
	}, [boardId, dispatch, isOpen, navigate, resetStatus, setIsOpenAddBoard]);

	const initialValues = boardEdit
		? allBoards?.find(b => b._id === boardEdit)
		: {
				name: '',
				icon: '0',
				background: '0',
		  };

	return (
		<ModalWindow isOpen={isOpenAddBoard} onRequestClose={closeModal} style={customStyles}>
			<Formik
				initialValues={initialValues}
				onSubmit={(board, actions) => {
					if (boardEdit) {
						dispatch(editBoard(board));
					} else {
						dispatch(addBoard(board));
					}
				}}
				// validationSchema={createBoardSchema}
			>
				{({ values }) => (
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<Title>{boardEdit ? 'Edit board' : 'Create board'}</Title>
							<CloseIcon name='close' onClick={closeModal} />
						</HeaderContainer>

						<LabelBox>
							<label>
								<StyledField name='name' type='text' placeholder='Title' />
								<ErrMessageStyled name='name' component='span' />
							</label>
						</LabelBox>
						<TitleIcons>Icons</TitleIcons>
						<StyleSheetManager shouldForwardProp={prop => prop !== 'isActive'}>
							<IconsContainer>
								{Array.from({ length: 8 }, (_, iconIndex) => (
									<LabelRadio key={`icons-${iconIndex}`}>
										<Field
											className='invisible'
											type='radio'
											name='icon'
											value={iconIndex}
										/>
										<TypesOfIcon
											name={`type-${iconIndex}`}
											isActive={Number(iconIndex) === Number(values.icon)}
										/>
									</LabelRadio>
								))}
							</IconsContainer>
						</StyleSheetManager>
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
							<ButtonText>{boardEdit ? 'Edit' : 'Create'}</ButtonText>
						</Button>
					</StyledForm>
				)}
			</Formik>
		</ModalWindow>
	);
};
