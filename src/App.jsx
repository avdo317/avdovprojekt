import React from 'react';
import { ThemeProvider } from './useContext/ThemeContext';
import ThemeComp from './useContext/ThemeComp';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeComp />
      <ThemeComp />
      <ThemeComp />
      <ThemeComp />
    </ThemeProvider>
  );
};
export default App;

