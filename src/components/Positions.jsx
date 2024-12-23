
import '../styles/Positions.css';

const positions = [
  { id: 1, title: 'Team Lead', organization: 'Global Hackathon 2023', description: 'Led a team to develop an AI healthcare solution, securing first place.' },
  { id: 2, title: 'Frontend Developer Intern', organization: 'OctaNet Services', description: 'Developed a to-do list app and startup landing site during internship.' },
  { id: 3, title: 'Project Coordinator', organization: 'InnovateX', description: 'Coordinated efforts for a cloud computing platform, winning the hackathon.' },
  { id: 4, title: 'Mentor', organization: 'Hack4Good', description: 'Guided participants in building impactful social platforms.' },
  { id: 5, title: 'Organizer', organization: 'TechChallenge 2021', description: 'Organized and managed the national-level coding competition.' },
];

function Positions() {
  return (
    <section id="positions" className="container py-5">
      <h2 className="text-center mb-4">Positions of Responsibility</h2>
      <div className="row">
        {positions.map((position) => (
          <div key={position.id} className="col-md-6 mb-4">
            <div className="position-card">
              <h3 className="position-title">{position.title}</h3>
              <h4 className="position-organization">{position.organization}</h4>
              <p className="position-description">{position.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Positions;