
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'RESEARCH ENGINE', description: 'Developed an AI Driven research engine for Commercial Courts for helping Judges, Judicial Executives and Lawyers', link: 'https://github.com/tanmay-vig/ai-driven-research-engine' },
  { id: 2, title: 'Churn Lens', description: 'Predicted the Customer Churn Prediction for Banks using ANN ', link: 'https://github.com/tanmay-vig/customer-churn-prediction' },
  { id: 5, title: 'Multilingual Invoice Extractor', description: 'Created a Multilingual Invoice for all languages using Gemini and Streamlit.', link: 'https://github.com/tanmay-vig/multi-language-invoice-extractor' },
  { id: 6, title: 'RAMSA 2024', description: 'Developed a Website on Recent 7th International Conference on Recent Advances in Mathematical Sciences and its Applications (RAMSA - 2024) for Department of Mathematics,Jaypee Institute of Information Technology (JIIT Noida, U.P.)', link: 'https://ramsa.netlify.app/' },
  {id: 8 , title: 'Crypto Hunter', description: 'Developed a website for tracking all the prices of the cryptocurrency in INR and USDT using Coingecko API and Chart.js for Charts' , link: 'https://github.com/tanmay-vig/react-crypto-tracker'},
  {id : 7 ,title: 'Community Detection and Recommendation' , description: 'Identified communities, top innfluencing nodes, predicted friends and predicted content in Facebook Snap Dataset', link: 'https://github.com/tanmay-vig/Community-Detection-and-Recommendation'},
  { id: 3, title: 'Smart ATS', description: 'An ats software using Gemini and Streamlit', link: 'https://github.com/tanmay-vig/ats-tracking-system' },
  { id: 4, title: 'Mediater', description: 'A landing site for Mediater using React, Framer and Bootstrap', link: 'https://mediater.netlify.app/' },
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