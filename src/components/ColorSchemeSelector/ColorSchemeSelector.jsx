import React from 'react';
import './ColorSchemeSelector.css';

const ColorSchemeSelector = ({ colorScheme, changeColorScheme }) => {
  const schemes = [
    { id: 'vibrant', name: 'Vibrant' },
    { id: 'pastel', name: 'Pastel' },
    { id: 'monochrome', name: 'Monochrome' }
  ];

  return (
    <div className="color-scheme-selector">
      <select 
        value={colorScheme} 
        onChange={(e) => changeColorScheme(e.target.value)}
        aria-label="Select color scheme"
      >
        {schemes.map(scheme => (
          <option key={scheme.id} value={scheme.id}>
            {scheme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorSchemeSelector;