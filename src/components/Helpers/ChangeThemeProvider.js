/** @format */

import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as themeDefault } from '../../constants/theme';
// import { useAuth } from 'hooks';

const ThemeContext = createContext();

const СhangeThemeProvider = ({ children }) => {
	// const { user } = useAuth()
	// const { thema } = user
	const [theme, setTheme] = useState(themeDefault[0].property);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { СhangeThemeProvider, ThemeContext };
