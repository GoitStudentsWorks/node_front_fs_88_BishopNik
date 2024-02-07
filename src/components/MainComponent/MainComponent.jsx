/** @format */

import React from 'react';

import { TextEmptyBoard, ButtonCreateBoard } from './MainComponent.styled';

function MainComponent({ children }) {
	return (
		<>
			{children ? (
				<>{children}</>
			) : (
				<TextEmptyBoard>
					Before starting your project, it is essential{' '}
					<ButtonCreateBoard onClick={() => alert('Create board')}>
						to create a board
					</ButtonCreateBoard>{' '}
					to visualize and track all the necessary tasks and milestones. This board serves
					as a powerful tool to organize the workflow and ensure effective collaboration
					among team members.
				</TextEmptyBoard>
			)}
		</>
	);
}

export default MainComponent;
