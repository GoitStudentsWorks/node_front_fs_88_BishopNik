/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return <MainContext.Provider value={{ isOpen, setIsOpen }}>{children}</MainContext.Provider>;
};
