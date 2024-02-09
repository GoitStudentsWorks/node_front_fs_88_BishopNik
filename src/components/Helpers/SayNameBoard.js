/** @format */

import { useSelector } from 'react-redux';
import { boardsState } from '../../redux/boards/selectors';

export function SayNameBoard(boardId) {
	const allBoard = useSelector(boardsState);

	const board = allBoard.find(({ _id }) => _id === boardId);

	if (!board) return '';

	return board.name;
}
