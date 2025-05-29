import { createContext, useState } from "react";
export const ThemeCon = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const haloo = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeCon.Provider value={{ theme, haloo }}>
      {children}
    </ThemeCon.Provider>
  )
}

