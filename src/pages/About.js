import React, { useEffect } from 'react';
import './PageStyles.css';
import './ProfileCard.css';
import logo from '../bg/output-onlinepngtools.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const el = document.getElementById('subscriber-count');
    if (el) {
      let count = 0;
      const target = 28000;
      const speed = 75;
      const increment = Math.ceil(target / speed);

      const updateCount = () => {
        count += increment;
        if (count >= target) {
          count = target;
          el.textContent = target.toLocaleString();
        } else {
          el.textContent = count.toLocaleString();
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }
  }, []);

  return (
    <div className="page-container centered-page fade-in">
      <h1 className="page-title">About DeepFine HQ</h1>
      <p className="page-text">
        DeepFine HQ is built for grassroots cricket lovers. We empower every street baller, turf hitter,
        and weekend warrior to upload their moments and get noticed.
      </p>
      <p className="page-text">
        From Instagram reels to game-changing highlights, DeepFine HQ is your digital dugout.
      </p>

      <a
        href="https://youtube.com/@deepfinehq?si=4kDEWI6tyeYiqpZ5"
        target="_blank"
        rel="noopener noreferrer"
        className="profile-card wide-card animated-glow"
      >
        <div className="logo-container circle-logo">
          <img src={logo} alt="DeepFine HQ Logo" className="profile-logo large-logo" />
        </div>
        <div className="profile-info center-texts">
          <h2 className="profile-name extra-bold">DeepFine HQ</h2>
          <p className="profile-stats large-count tight-spacing">
            <span id="subscriber-count">0</span> Subscribers
          </p>
        </div>
      </a>

      <button onClick={() => navigate('/submit')} className="cta-btn hover-zoom">
        Get Featured
      </button>
    </div>
  );
};

export default About;
