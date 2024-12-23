
import '../styles/Achievements.css';

const achievements = [
  { id: 1, title: 'SIH 2024 WINNER', description: 'Won the Smart India Hackathon 2024 for the Problem ID 1670 by UIDAI.' },
  { id: 2, title: 'HACKSTREET 2.0 WINNER', description: 'Secured 1st place in HackStreet 2.0 2024 for a reducing Vehicular Pollution solution.' },
  { id: 3, title: 'NEXTECH RUNNER UP', description: 'Developed an solution for smart monitoring of vehicular pollution.' },
  { id: 4, title: 'FINTESTICO 2023 RUNNER UP', description: 'Built an platform to monitor and safegaurd people from Spam Emails, SMS and Websites.' },
  { id: 5, title: 'CODEJAM 2023 RUNNER UP ', description: 'Created a Retro-Styled app for Snake, Tetris and Flappy Bird game.' },
  { id: 6, title: 'TECHHACKS 3.0 WINNER', description: 'Developed an IOT solution for monitoring the vehicular emissions.' },
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