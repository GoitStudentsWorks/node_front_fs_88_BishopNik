/** @format */

import React, { useContext} from 'react';
import { TextEmptyBoard, ButtonCreateBoard } from './MainComponent.styled';
import { MainContext } from 'components/Helpers';


export function MainComponent({ children }) {
	const { setIsOpenAddBoard } = useContext(MainContext);
	return (
		<>
			{children ? (
				<>{children}</>
			) : (
				<TextEmptyBoard>
					Before starting your project, it is essential{' '}
					<ButtonCreateBoard
						onClick={() => {
							setIsOpenAddBoard(true);
						}}
					>
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
