/** @format */

import { useBoards } from 'hooks';

export function SayNameBoard(boardId) {
	const { allBoards } = useBoards();

	const board = allBoards?.find(({ _id }) => _id === boardId);

	if (!board) return '';

	return board.name;
}
