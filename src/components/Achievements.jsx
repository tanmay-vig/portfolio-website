
import '../styles/Achievements.css';

const achievements = [
  { id: 1, title: 'Hackathon Champion', description: 'Won the Global Hackathon 2023 for an AI-based healthcare project.' },
  { id: 2, title: 'CodeFest Winner', description: 'Secured 1st place in CodeFest 2023 for a blockchain-based supply chain solution.' },
  { id: 3, title: 'InnovateX Hackathon', description: 'Developed a cloud computing platform, winning the InnovateX 2022 Hackathon.' },
  { id: 4, title: 'Hack4Good', description: 'Built a social impact platform and won Hack4Good 2022.' },
  { id: 5, title: 'TechChallenge 2021', description: 'Created a fintech app and won TechChallenge 2021.' },
  { id: 6, title: 'AI Hackathon', description: 'Won the AI Hackathon 2021 with an ML-powered recommendation system.' },
];

function Achievements() {
  return (
    <section id="achievements" className="container py-5">
      <h2 className="text-center mb-4">Achievements</h2>
      <div className="row">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="col-md-4 col-sm-6 mb-4">
            <div className="achievement-card">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;