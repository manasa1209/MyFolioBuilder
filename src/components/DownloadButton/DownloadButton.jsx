import React from 'react';
import { generateHTML } from '../../utils/generateHTML';
import './DownloadButton.css';

const DownloadButton = ({ userData, mode, colorScheme, baseColor }) => {
  const handleDownload = () => {
    // Check if there's enough data to generate a portfolio
    if (!userData.name && !userData.title) {
      alert('Please add at least your name and professional title before downloading.');
      return;
    }

    const html = generateHTML(userData, mode, colorScheme, baseColor);
    
    // Create a blob with the HTML content
    const blob = new Blob([html], { type: 'text/html' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-portfolio.html';
    
    // Append to the document, click, and clean up
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download Portfolio Website
    </button>
  );
};

export default DownloadButton;