
import '../styles/Positions.css';

const positions = [
  { id: 1, title: 'TECH HEAD CSE', organization: 'CICE JIIT 2023-2024', description: "Led a team to organize JIIT's flagship events VIDYUT (Project Exhibition) and POWER (Technical workshops)." },
  { id: 2, title: 'Developer', organization: 'Department of Mathematics JIIT', description: 'Developed landing site for the conference Recent Advances in Mathematical Sciences and its Applications (RAMSA - 2024).' },
];

function Positions() {
  return (
    <section id="positions" className="container py-5">
      <h2 className="text-center my-4">Positions of Responsibility</h2>
      <div className="row">
        {positions.map((position) => (
          <div key={position.id} className="col-md-6 mb-4">
            <div className="position-card">
              <h3 className="position-title text-black">{position.title}</h3>
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