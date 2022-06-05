import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const defaultValue = {
  darkTheme: false,
  toggleTheme: () => {},
};

const THEME_KEY = "DARK_THEME";

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const cachedTheme = localStorage.getItem(THEME_KEY);
    if (cachedTheme == "true") {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, String(darkTheme));
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
