import React, { useContext } from 'react';
import { ThemeCon } from './ThemeContext';

const ThemeComp = () => {
  const { theme, haloo } = useContext(ThemeCon);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    height: '20vh',
  };
  return (
    <div style={styles}>
      <h1>{theme}</h1>
      <button onClick={haloo}>Toggle</button>
    </div>)
}

export default ThemeComp;
