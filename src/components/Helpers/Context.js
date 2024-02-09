/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	const [isOpenAddBoard, setIsOpenAddBoard] = useState(false);
	const [boardEdit, setBoardEdit] = useState(null);

	return (
		<MainContext.Provider
			value={{
				isOpenSidebar,
				setIsOpenSidebar,
				isOpenAddBoard,
				setIsOpenAddBoard,
				boardEdit,
				setBoardEdit,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
