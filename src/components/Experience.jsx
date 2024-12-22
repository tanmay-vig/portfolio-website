
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'OctaNet Services',
    date: 'June 2024 - August 2024',
    description: 'Developed a to-do list app and a full-stack landing site using React and Node.js.',
  },
  {
    title: 'IBM Data Analyst Intern',
    company: 'IBM',
    date: 'March 2024 - May 2024',
    description: 'Worked on data visualization and predictive analysis using Python and Tableau.',
  },
  {
    title: 'AI Project Contributor',
    company: 'Personal Project',
    date: '2023 - 2024',
    description: 'Developed an AI-driven Legal Research Engine for judiciary applications using NLP.',
  },
];

function Experience() {
  return (
    <div className="experience-section" id="experience">
      <h2 className="section-title mt-4">Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="timeline-title">{experience.title}</h3>
              <h4 className="timeline-company">{experience.company}</h4>
              <span className="timeline-date">{experience.date}</span>
              <p className="timeline-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;