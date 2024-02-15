/** @format */

import { useSelector } from 'react-redux';

import {
	modalData,
	boardsState,
	statusLoadingState,
	activeBoardState,
} from 'redux/boards/selectors';

export const useBoards = () => {
	const { isOpen, boardId } = useSelector(modalData);
	const allBoards = useSelector(boardsState);
	const statusLoading = useSelector(statusLoadingState);
	const activeBoard = useSelector(activeBoardState);

	return {
		isOpen,
		boardId,
		allBoards,
		statusLoading,
		activeBoard,
	};
};
