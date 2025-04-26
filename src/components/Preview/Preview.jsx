import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import DownloadButton from '../DownloadButton/DownloadButton';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ColorSchemeSelector from '../ColorSchemeSelector/ColorSchemeSelector';
import './Preview.css';

const Preview = ({ userData }) => {
  const { mode, colorScheme, baseColor, toggleMode, changeColorScheme, changeBaseColor } = useContext(ThemeContext);

  useEffect(() => {
    const previewContainer = document.querySelector('.preview-container');
    if (previewContainer) {
      previewContainer.style.setProperty('--base-color', baseColor);
      previewContainer.className = `preview-container ${mode}-mode ${colorScheme}-scheme`;
    }
  }, [mode, colorScheme, baseColor]);

  return (
    <div className="preview-wrapper">
      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="preview-controls">
        <h2>Live Preview</h2>
        <div className="theme-controls">
          <ThemeToggle mode={mode} toggleMode={toggleMode} />
          <ColorSchemeSelector colorScheme={colorScheme} changeColorScheme={changeColorScheme} />
          <div className="base-color-picker">
            <label htmlFor="base-color">Base Color:</label>
            <input
              type="color"
              id="base-color"
              value={baseColor}
              onChange={(e) => changeBaseColor(e.target.value)}
              aria-label="Select base color"
            />
          </div>
        </div>
      </div>

      <div className={`preview-container ${mode}-mode ${colorScheme}-scheme`}>
        <header className="preview-header">
          <h1>{userData.name || 'Your Name'}</h1>
          <h2>{userData.title || 'Your Professional Title'}</h2>
        </header>

        <section className="preview-bio">
          <p>{userData.bio || 'Your bio will appear here. Write a brief introduction about yourself, your experience, and what you do.'}</p>
        </section>

        {userData.skills?.length > 0 && (
          <section className="preview-skills">
            <h3>Skills</h3>
            <div className="preview-skills-list">
              {userData.skills.map((skill, index) => (
                <span key={index} className="preview-skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        )}

        {userData.projects?.length > 0 && (
          <section className="preview-projects">
            <h3>Projects</h3>
            <div className="preview-projects-grid">
              {userData.projects.map((project, index) => (
                <div key={index} className="preview-project-card">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="preview-project-link">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {(userData.contact?.email || userData.contact?.github || userData.contact?.linkedin) && (
          <section className="preview-contact">
            <h3>Contact</h3>
            <div className="preview-contact-info">
              {userData.contact.email && (
                <a href={`mailto:${userData.contact.email}`} className="preview-contact-link">
                  Email
                </a>
              )}
              {userData.contact.github && (
                <a href={userData.contact.github} target="_blank" rel="noopener noreferrer" className="preview-contact-link">
                  GitHub
                </a>
              )}
              {userData.contact.linkedin && (
                <a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="preview-contact-link">
                  LinkedIn
                </a>
              )}
            </div>
          </section>
        )}
      </div>

      <div className="download-section">
        <DownloadButton 
          userData={userData} 
          mode={mode} 
          colorScheme={colorScheme} 
          baseColor={baseColor}
        />
      </div>
    </div>
  );
};

export default Preview;