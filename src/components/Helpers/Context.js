/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	const [isOpenAddBoard, setOpenIsAddBoard] = useState(false);

	return (
		<MainContext.Provider
			value={{ isOpenSidebar, setIsOpenSidebar, isOpenAddBoard, setOpenIsAddBoard }}
		>
			{children}
		</MainContext.Provider>
	);
};
