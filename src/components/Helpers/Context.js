/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	const [isOpenAddBoard, setIsOpenAddBoard] = useState(false);
	const [boardEdit, setBoardEdit] = useState(null);
	const [isOpenAddColumn, setIsOpenAddColumn] = useState(false);
	const [columnEdit, setColumnEdit] = useState(null);
	const [filter, setFilter] = useState('all');

	return (
		<MainContext.Provider
			value={{
				isOpenSidebar,
				setIsOpenSidebar,
				isOpenAddBoard,
				setIsOpenAddBoard,
				boardEdit,
				setBoardEdit,
				filter,
				setFilter,
				isOpenAddColumn,
				setIsOpenAddColumn,
				columnEdit,
				setColumnEdit,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
