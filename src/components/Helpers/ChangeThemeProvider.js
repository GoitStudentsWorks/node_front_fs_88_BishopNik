/** @format */

import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import isPropValid from '@emotion/is-prop-valid';
import { theme as themeDefault } from '../../constants/theme';

const ThemeContext = createContext();

const СhangeThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themeDefault[0].property);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{/* <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}> */}
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
			{/* </StyleSheetManager> */}
		</ThemeContext.Provider>
	);
};

export { СhangeThemeProvider, ThemeContext };
