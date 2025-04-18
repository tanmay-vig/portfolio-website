import '../styles/Experience.css';

const experiences = [
  {
    title: 'IBM Data Analyst Intern',
    company: 'IBM',
    date: 'July 2024 - August 2024',
    description: 'Worked on data visualization and predictive analysis using Python and Excel.',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'OctaNet Services',
    date: 'June 2024 - July 2024',
    description: 'Developed a to-do list app and a full-stack landing site using React and Node.js.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Maharishi Technologies',
    date: 'June 2023 - July 2023',
    description: 'Devloped a Landing Site for Bliss Infosystems Pvt. Ltd. which enchanced customer experience and sales of the company',
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