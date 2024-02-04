/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ModalFilter } from '../Filter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
	TextEmptyBoard,
	ButtonCreateBoard,
} from './MainComponent.styled';

function MainComponent({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [idBoard, setIdBoard] = useState(null);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const { board } = useParams(null);

	useEffect(() => {
		setIdBoard(board);
	}, [board]);

	return (
		<>
			<ButtonFilter type='button' onClick={openModal}>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			<ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			{idBoard ? (
				<>
					<h1 style={{ marginBottom: '30px', marginLeft: '25px', color: 'white' }}>
						Project office
					</h1>
					<div
						style={{
							width: '336px',
							height: '56px',
							border: '1px solid white',
							margin: '40px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<h1 style={{ color: 'white' }}>{idBoard}</h1>
					</div>
				</>
			) : (
				<TextEmptyBoard>
					Before starting your project, it is essential{' '}
					<ButtonCreateBoard type='button'>to create a board</ButtonCreateBoard> to
					visualize and track all the necessary tasks and milestones. This board serves as
					a powerful tool to organize the workflow and ensure effective collaboration
					among team members.
				</TextEmptyBoard>
			)}
		</>
	);
}

export default MainComponent;
