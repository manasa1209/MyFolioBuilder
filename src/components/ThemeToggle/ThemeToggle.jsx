import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ mode, toggleMode }) => {
  return (
    <div className="theme-toggle">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={mode === 'dark'} 
          onChange={toggleMode}
          aria-label="Toggle light/dark mode"
        />
        <span className="slider round">
          <span className="mode-icon">
            {mode === 'light' ? '☀️' : '🌙'}
          </span>
        </span>
      </label>
    </div>
    
  
  );
};


export default ThemeToggle;