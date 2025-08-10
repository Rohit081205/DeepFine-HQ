import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './PageStyles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="page-container home-container fade-in">
      <h1 className="page-title fade-section">
        <Typewriter
          words={[
            'DeepFine HQ',
            'Cricket. Caught Differently.',
            'Your Game. Your Spotlight.',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h1>

      <div className="gif-container hover-zoom fade-section">
        <iframe
          src="https://giphy.com/embed/SGZPmDJpkc0ak"
          width="200"
          height="200"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Cricket Animation"
        />
      </div>

      <p className="page-subtitle fade-section">
        Shining the spotlight on turf cricket stars
      </p>
      <p className="page-text fade-section">
        DeepFine HQ is your platform to share your game, showcase your moments,
        and get noticed. Whether you're a turf warrior, a net beast, or just
        someone who lives and breathes cricket — this is your place.
      </p>

      <h2 className="gallery-title fade-section">GALLERY</h2>

      <div className="parallax-gallery fade-section spaced-gallery">
        <div className="parallax-track">
          {Array(10).fill("Claim Your Spotlight").map((text, idx) => (
            <div className="parallax-item" key={idx}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/about')}
        className="cta-btn hover-zoom fade-section"
      >
        What’s DeepFine HQ
      </button>
    </div>
  );
};

export default Home;
