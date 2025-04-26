import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Preview from './components/Preview/Preview';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    title: '',
    bio: '',
    skills: [],
    projects: [],
    contact: {
      email: '',
      github: '',
      linkedin: '',
    }
  });

  const handleFormUpdate = (updatedData) => {
    setUserData({ ...userData, ...updatedData });
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Form userData={userData} onUpdate={handleFormUpdate} />
          <Preview userData={userData} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;