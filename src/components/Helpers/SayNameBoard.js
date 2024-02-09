/** @format */

import { useBoards } from 'hooks';

export function SayNameBoard(boardId) {
	const { allBoard } = useBoards();

	const board = allBoard?.find(({ _id }) => _id === boardId);

	if (!board) return '';

	return board.name;
}
