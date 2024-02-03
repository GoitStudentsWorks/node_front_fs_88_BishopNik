/** @format */

import React from 'react';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
	TextEmptyBoard,
	ButtonCreateBoard,
} from './MainComponent.styled';

function MainComponent({ children }) {
	return (
		<>
			<ButtonFilter type='button'>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			{children ? (
				children
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
