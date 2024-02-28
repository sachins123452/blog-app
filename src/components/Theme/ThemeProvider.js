import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import {lightTheme,darkTheme, ThemeClass} from './themes';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children, customLightTheme, customDarkTheme }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || (prefersDarkMode ? 'dark' : 'light'));

  useEffect(() => {
    const initialTheme = storedTheme || (prefersDarkMode ? 'dark' : 'light');
    setTheme(initialTheme);
  }, [storedTheme, prefersDarkMode]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const mergedLightTheme = {
   ...lightTheme,
   ...customLightTheme,
  };

  const mergedDarkTheme = {
   ...darkTheme,
   ...customDarkTheme,
  };

  const currentTheme = theme === 'dark' ? mergedDarkTheme : mergedLightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
