export const generateHTML = (userData, mode, colorScheme, baseColor) => {
    // Start building the HTML content
    const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userData.name || 'My Portfolio'} - ${userData.title || 'Developer'}</title>
    <style>
      /* CSS Reset and Global Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        transition: all 0.3s ease;
      }
      
      /* Container */
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      /* Theme-specific styles */
      ${mode === 'dark' ? `
        body {
          background-color: #000000;
          color: #ffffff;
        }
        
        header, .bio, .skills, .projects, .contact {
          background-color: ${baseColor};
          color: #ffffff;
        }
      ` : `
        body {
          background-color: ${baseColor};
          color: #333333;
        }
        
        header, .bio, .skills, .projects, .contact {
          background-color: #ffffff;
          color: #333333;
        }
      `}
      
      /* Header Section */
      header {
        padding: 5rem 0;
        text-align: center;
        border-radius: 12px;
        margin: 2rem;
      }
      
      header h1 {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
      }
      
      header h2 {
        font-size: 1.8rem;
        font-weight: 400;
        opacity: 0.9;
      }
      
      /* Bio Section */
      .bio {
        padding: 4rem 0;
        border-radius: 12px;
        margin: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .bio p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }
      
      /* Skills Section */
      .skills {
        padding: 4rem 0;
        border-radius: 12px;
        margin: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .skills h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      
      .skills-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        max-width: 900px;
        margin: 0 auto;
      }
      
      .skill-tag {
        background-color: ${baseColor};
        color: white;
        padding: 0.6rem 1.2rem;
        border-radius: 30px;
        font-size: 1rem;
        transition: transform 0.2s ease;
      }
      
      .skill-tag:hover {
        transform: scale(1.1);
      }
      
      /* Projects Section */
      .projects {
        padding: 4rem 0;
        border-radius: 12px;
        margin: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .projects h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .project-card {
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
      }
      
      .project-card:hover {
        transform: translateY(-10px);
      }
      
      .project-content {
        padding: 1.5rem;
      }
      
      .project-card h4 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      
      .project-card p {
        margin-bottom: 1.5rem;
      }
      
      .project-link {
        display: inline-block;
        background-color: ${baseColor};
        color: white;
        text-decoration: none;
        padding: 0.6rem 1.2rem;
        border-radius: 4px;
        font-weight: 500;
        transition: opacity 0.2s;
      }
      
      .project-link:hover {
        opacity: 0.9;
      }
      
      /* Contact Section */
      .contact {
        padding: 4rem 0;
        border-radius: 12px;
        margin: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .contact h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      
      .contact-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
      }
      
      .contact-link {
        color: white;
        text-decoration: none;
        padding: 0.8rem 1.5rem;
        border: 2px solid white;
        border-radius: 30px;
        font-weight: 500;
        transition: all 0.2s;
      }
      
      .contact-link:hover {
        opacity: 0.9;
      }
      
      /* Footer */
      footer {
        text-align: center;
        padding: 2rem 0;
        font-size: 0.9rem;
        opacity: 0.8;
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        header h1 {
          font-size: 2.5rem;
        }
        
        header h2 {
          font-size: 1.4rem;
        }
        
        .bio p {
          font-size: 1.1rem;
          padding: 0 1rem;
        }
        
        .projects-grid {
          grid-template-columns: 1fr;
          padding: 0 1rem;
        }
        
        .contact-links {
          flex-direction: column;
          gap: 1rem;
          max-width: 300px;
          margin: 0 auto;
        }
      }
    </style>
  </head>
  <body>
    <!-- Header Section -->
    <header>
      <div class="container">
        <h1>${userData.name || 'Your Name'}</h1>
        <h2>${userData.title || 'Professional Title'}</h2>
      </div>
    </header>
    
    <!-- Bio Section -->
    <section class="bio">
      <div class="container">
        <p>${userData.bio || 'Add your bio in the form to see it here.'}</p>
      </div>
    </section>
    
    ${userData.skills && userData.skills.length > 0 ? `
    <!-- Skills Section -->
    <section class="skills">
      <div class="container">
        <h3>Skills</h3>
        <div class="skills-list">
          ${userData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    </section>
    ` : ''}
    
    ${userData.projects && userData.projects.length > 0 ? `
    <!-- Projects Section -->
    <section class="projects">
      <div class="container">
        <h3>Projects</h3>
        <div class="projects-grid">
          ${userData.projects.map(project => `
            <div class="project-card">
              <div class="project-content">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                ${project.link ? `<a href="${project.link}" class="project-link" target="_blank">View Project</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}
    
    ${userData.contact && (userData.contact.email || userData.contact.github || userData.contact.linkedin) ? `
    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <h3>Contact</h3>
        <div class="contact-links">
          ${userData.contact.email ? `<a href="mailto:${userData.contact.email}" class="contact-link">Email</a>` : ''}
          ${userData.contact.github ? `<a href="${userData.contact.github}" class="contact-link" target="_blank">GitHub</a>` : ''}
          ${userData.contact.linkedin ? `<a href="${userData.contact.linkedin}" class="contact-link" target="_blank">LinkedIn</a>` : ''}
        </div>
      </div>
    </section>
    ` : ''}
    
    <!-- Footer -->
    <footer>
      <div class="container">
        <p>© ${new Date().getFullYear()} ${userData.name || 'My Portfolio'}. Created with MyFolioBuilder.</p>
      </div>
    </footer>
  </body>
  </html>
    `;
    
    return html;
  };