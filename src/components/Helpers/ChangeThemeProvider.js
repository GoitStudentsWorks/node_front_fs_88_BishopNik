/** @format */

import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as themeDefault } from '../../constants/theme';
// import { useAuth } from 'hooks';

const ThemeContext = createContext();

const СhangeThemeProvider = ({ children }) => {
  const initialTheme = JSON.parse(localStorage.getItem('theme'));

  const [theme, setTheme] = useState(initialTheme || themeDefault[0].property);

  const handleSetTheme = theme => {
    localStorage.setItem('theme', JSON.stringify(theme));
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { СhangeThemeProvider, ThemeContext };
