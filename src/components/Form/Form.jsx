import React, { useState } from 'react';
import './Form.css';

const Form = ({ userData, onUpdate }) => {
  const [skillInput, setSkillInput] = useState('');
  const [projectInput, setProjectInput] = useState({
    title: '',
    description: '',
    link: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      onUpdate({
        [parent]: {
          ...userData[parent],
          [child]: value
        }
      });
    } else {
      onUpdate({ [name]: value });
    }
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() !== '') {
      onUpdate({ skills: [...userData.skills, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...userData.skills];
    updatedSkills.splice(index, 1);
    onUpdate({ skills: updatedSkills });
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectInput(prev => ({ ...prev, [name]: value }));
  };

  const addProject = (e) => {
    e.preventDefault();
    if (projectInput.title.trim() !== '') {
      onUpdate({
        projects: [...userData.projects, { ...projectInput }]
      });
      setProjectInput({ title: '', description: '', link: '' });
    }
  };

  const removeProject = (index) => {
    const updatedProjects = [...userData.projects];
    updatedProjects.splice(index, 1);
    onUpdate({ projects: updatedProjects });
  };

  return (
    <div className="form-container">
      <h2>Fill Your Details</h2>
      
      <div className="form-section">
        <h3>Basic Information</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Professional Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={userData.title}
            onChange={handleChange}
            placeholder="Frontend Developer"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            placeholder="A short description about yourself"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className="form-section">
        <h3>Skills</h3>
        <form onSubmit={addSkill} className="skill-form">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add a skill (e.g. JavaScript)"
          />
          <button type="submit">Add</button>
        </form>

        <div className="skills-list">
          {userData.skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              <span>{skill}</span>
              <button 
                type="button" 
                onClick={() => removeSkill(index)}
                className="remove-btn"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Projects</h3>
        <form onSubmit={addProject} className="project-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={projectInput.title}
              onChange={handleProjectInputChange}
              placeholder="Project Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              value={projectInput.description}
              onChange={handleProjectInputChange}
              placeholder="Project Description"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="link"
              value={projectInput.link}
              onChange={handleProjectInputChange}
              placeholder="Project Link (optional)"
            />
          </div>
          <button type="submit">Add Project</button>
        </form>

        <div className="projects-list">
          {userData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
              <button 
                type="button" 
                onClick={() => removeProject(index)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Contact Information</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="contact.email"
            value={userData.contact.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            id="github"
            name="contact.github"
            value={userData.contact.github}
            onChange={handleChange}
            placeholder="https://github.com/yourusername"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="contact.linkedin"
            value={userData.contact.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/yourusername"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;