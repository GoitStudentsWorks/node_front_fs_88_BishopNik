/** @format */

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
} from './CreateNewBoardModal.styled';
import { customStyles } from '../Modal.styled';

import background from '../../../img/background.json';
import ModalWindow from '../Modal';

export const CreateNewBoardModal = ({ isOpen, setIsOpen }) => {
	const handleSubmit = () => {};

	const icons = [1, 2, 3, 4, 5, 6, 7, 8];
	const backgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
			<Formik
				initialValues={{ title: '', icon: '', background: '' }}
				onSubmit={(values, actions) => {
					console.log(values);

					handleSubmit(values, actions);
				}}
				// validationSchema={LoginSchema}
			>
				<StyledForm autoComplete='off'>
					<HeaderContainer>
						<Title>New board</Title>
						<CloseIcon name='close' onClick={() => setIsOpen(false)} />
					</HeaderContainer>

					<LabelBox>
						<label>
							<StyledField name='title' type='text' placeholder='Title' />
							{/* <ErrMessageStyled name="email" component="span" /> */}
						</label>

						{/* <ErrMessageStyled name="password" component="span" /> */}
					</LabelBox>
					<TitleIcons>Icons</TitleIcons>

					<IconsContainer>
						{icons.map(iconIndex => (
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
						{backgrounds.map(imageIndex => (
							<LabelRadio key={`backround-${imageIndex}`}>
								<Field
									className='invisible'
									type='radio'
									name='backround'
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
