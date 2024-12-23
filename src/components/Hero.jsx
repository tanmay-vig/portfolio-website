
import '../styles/Hero.css';
import heroImage from '../assets/hero-image.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Tanmay</h1>
          <p className="hero-subtitle">A passionate Software Developer creating innovative solutions.</p>
          <a href="#contact" className="btn btn-primary hero-btn">Contact Me</a>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;