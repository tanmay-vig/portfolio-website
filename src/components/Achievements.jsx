import '../styles/Achievements.css';
import { motion } from 'framer-motion';

const achievements = [
  { id: 1, title: 'SIH 2024 WINNER', description: 'Won the Smart India Hackathon 2024 for the Problem ID 1670 by UIDAI.' },
  { id: 2, title: 'HACKSTREET 2.0 WINNER', description: 'Secured 1st place in HackStreet 2.0 2024 for a reducing Vehicular Pollution solution.' },
  { id: 3, title: 'NEXTECH RUNNER UP', description: 'Developed a solution for smart monitoring of vehicular pollution.' },
  { id: 4, title: 'FINTESTICO 2023 RUNNER UP', description: 'Built a platform to monitor and safeguard people from Spam Emails, SMS, and Websites.' },
  { id: 5, title: 'CODEJAM 2023 RUNNER UP', description: 'Created a Retro-Styled app for Snake, Tetris, and Flappy Bird games.' },
  { id: 6, title: 'TECHHACKS 3.0 WINNER', description: 'Developed an IoT solution for monitoring vehicular emissions.' },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="text-center achievements-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: achievement.id * 0.1 }}
          >
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;