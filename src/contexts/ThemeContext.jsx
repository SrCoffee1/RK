import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check localStorage for saved theme preference, default to dark if not found
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === null ? true : savedTheme === 'dark';
  });

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    // Apply theme class to body for global styling if needed
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  // Provide the theme state and toggle function to all children components
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};