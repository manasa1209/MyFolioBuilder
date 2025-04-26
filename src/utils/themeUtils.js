// Theme colors for different schemes and modes
export const themeColors = {
    light: {
      vibrant: {
        primary: '#4361ee',
        secondary: '#3a0ca3',
        text: '#1a1a2e',
        background: '#ffffff',
        accent: '#f72585'
      },
      pastel: {
        primary: '#a0c4ff',
        secondary: '#bdb2ff',
        text: '#444444',
        background: '#ffffff',
        accent: '#ffc6ff'
      },
      monochrome: {
        primary: '#404040',
        secondary: '#737373',
        text: '#0f0f0f',
        background: '#f5f5f5',
        accent: '#212121'
      }
    },
    dark: {
      vibrant: {
        primary: '#4cc9f0',
        secondary: '#4895ef',
        text: '#f8f9fa',
        background: '#121212',
        accent: '#f72585'
      },
      pastel: {
        primary: '#9bf6ff',
        secondary: '#caffbf',
        text: '#e0e0e0',
        background: '#232323',
        accent: '#ffadad'
      },
      monochrome: {
        primary: '#a3a3a3',
        secondary: '#6b7280',
        text: '#e5e5e5',
        background: '#121212',
        accent: '#e0e0e0'
      }
    }
  };
  
  // Get CSS variable values based on mode and scheme
  export const getThemeVariables = (mode, colorScheme) => {
    const schemeKey = colorScheme.toLowerCase();
    const modeKey = mode.toLowerCase();
    
    if (themeColors[modeKey] && themeColors[modeKey][schemeKey]) {
      return themeColors[modeKey][schemeKey];
    }
    
    // Fallback to light vibrant
    return themeColors.light.vibrant;
  };
  
  // Apply theme to document body
  export const applyTheme = (mode, colorScheme) => {
    const themeVars = getThemeVariables(mode, colorScheme);
    
    document.documentElement.style.setProperty('--primary', themeVars.primary);
    document.documentElement.style.setProperty('--secondary', themeVars.secondary);
    document.documentElement.style.setProperty('--text', themeVars.text);
    document.documentElement.style.setProperty('--background', themeVars.background);
    document.documentElement.style.setProperty('--accent', themeVars.accent);
  };