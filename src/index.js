import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Homepage from './pages/Homepage';

// Function to update meta tags and document title
function updateMetaTags() {
  document.title = "Walaa Will Jamous - AI & Robotics Professional";

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = "Walaa Will Jamous's portfolio showcasing expertise in AI, robotics, and smart home automation. Discover innovative projects and professional insights.";
  } else {
    const descriptionMeta = document.createElement('meta');
    descriptionMeta.name = 'description';
    descriptionMeta.content = "Walaa Will Jamous's portfolio showcasing expertise in AI, robotics, and smart home automation. Discover innovative projects and professional insights.";
    document.head.appendChild(descriptionMeta);
  }

  // Add additional meta tags for SEO
  const keywords = document.createElement('meta');
  keywords.name = 'keywords';
  keywords.content = 'AI, Robotics, Smart Home Automation, Machine Learning, Python, Docker, Kubernetes, TensorFlow, PyTorch';
  document.head.appendChild(keywords);

  const authorMeta = document.createElement('meta');
  authorMeta.name = 'author';
  authorMeta.content = 'Walaa Will Jamous';
  document.head.appendChild(authorMeta);

  // Add canonical URL
  const linkCanonical = document.createElement('link');
  linkCanonical.rel = 'canonical';
  linkCanonical.href = 'https://wlaa41.github.io/Portfolio/';
  document.head.appendChild(linkCanonical);
}

ReactDOM.render(
  <div>
    {updateMetaTags()}
    <Homepage />
  </div>,
  document.getElementById('root')
);
