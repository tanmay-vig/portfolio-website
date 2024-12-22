
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'Portfolio Website', description: 'A responsive and modern portfolio website built with React, Vite, and Framer Motion.', link: '#' },
  { id: 2, title: 'Chatbot Application', description: 'An AI-powered chatbot using NLP and Langchain.', link: '#' },
  { id: 3, title: 'E-commerce Platform', description: 'A full-stack e-commerce platform built with MERN stack.', link: '#' },
  { id: 4, title: 'Weather App', description: 'A weather forecasting app using OpenWeather API.', link: '#' },
  { id: 5, title: 'Blog CMS', description: 'A content management system for blogs with Django.', link: '#' },
  { id: 6, title: 'AI Image Generator', description: 'An AI-based image generation tool using OpenAI API.', link: '#' },
];

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 col-sm-6 mb-4">
            <div className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;