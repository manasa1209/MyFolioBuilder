import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getSavedMode = () => localStorage.getItem('mode') || 'light';
  const getSavedColorScheme = () => localStorage.getItem('colorScheme') || 'vibrant';
  const getSavedBaseColor = () => localStorage.getItem('baseColor') || '#4361ee';

  const [mode, setMode] = useState(getSavedMode);
  const [colorScheme, setColorScheme] = useState(getSavedColorScheme);
  const [baseColor, setBaseColor] = useState(getSavedBaseColor);

  useEffect(() => {
    localStorage.setItem('mode', mode);
    localStorage.setItem('colorScheme', colorScheme);
    localStorage.setItem('baseColor', baseColor);
  }, [mode, colorScheme, baseColor]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const changeColorScheme = (scheme) => {
    setColorScheme(scheme);
  };

  const changeBaseColor = (color) => {
    setBaseColor(color);
  };

  return (
    <ThemeContext.Provider value={{ mode, colorScheme, baseColor, toggleMode, changeColorScheme, changeBaseColor }}>
      {children}
    </ThemeContext.Provider>
  );
};