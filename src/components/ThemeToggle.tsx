import React from 'react';

const ThemeToggle: React.FC = () => {
  const setTheme = (theme: string) => {
    document.body.className = theme;
  };

  return (
    <div className="theme-toggle">
      <button onClick={() => setTheme('light-theme')}>Light Theme</button>
      <button onClick={() => setTheme('blue-theme')}>Blue Theme</button>
      <button onClick={() => setTheme('')}>Dark Theme</button>
    </div>
  );
};

export default ThemeToggle;
