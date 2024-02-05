/** @format */

import React from 'react';

import { TextEmptyBoard, ButtonCreateBoard } from './MainComponent.styled';

function MainComponent({ children }) {
	return (
		<>
			{children ? (
				<>
					{/* -----Delete code----- */}
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
						<h1 style={{ color: 'white' }}>{children}</h1>
					</div>
					{/* --------- */}
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
