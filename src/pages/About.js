import React, { useEffect, useRef } from 'react';
import './PageStyles.css';
import './ProfileCard.css';
import logo from '../bg/output-onlinepngtools.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireflies = [];
    const numFireflies = 50;

    for (let i = 0; i < numFireflies; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        glow: Math.random() * 0.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireflies.forEach((f) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 200, ${f.glow})`;
        ctx.shadowColor = 'yellow';
        ctx.shadowBlur = 15;
        ctx.fill();

        f.x += f.dx;
        f.y += f.dy;

        if (f.x < 0 || f.x > canvas.width) f.dx *= -1;
        if (f.y < 0 || f.y > canvas.height) f.dy *= -1;

        f.glow += (Math.random() - 0.5) * 0.05;
        if (f.glow < 0.3) f.glow = 0.3;
        if (f.glow > 1) f.glow = 1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="page-container centered-page fade-in" style={{ position: 'relative', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      ></canvas>

      <div style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
  );
};

export default About;
