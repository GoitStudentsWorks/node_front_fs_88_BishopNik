/** @format */

import { useSelector } from 'react-redux';

import { modalData, boardsState } from 'redux/boards/selectors';

export const useBoards = () => {
	const { isOpen, boardId } = useSelector(modalData);
	const allBoards = useSelector(boardsState);

	return {
		isOpen,
		boardId,
		allBoards,
	};
};
