
import '../styles/Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-icons">
          <a href="mailto:tanmaykrisha@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
            <p>Email</p>
          </a>
          <a href="https://www.linkedin.com/in/tanmay-vig-7bba51224/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/tanmay-vig" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;